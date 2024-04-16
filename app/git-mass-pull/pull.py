# Установка необходимых модулей
# py -m pip install GitPython

# Запуск
# python C:\Saby\store\pull.py -p c:\Saby\_sources\eo -b rc-23.6100


import os
import argparse
import git


parser = argparse.ArgumentParser(
    description='Управление группой репозиториев'
)

parser.add_argument(
    '-b', '--branch',
    dest='branch',
    help='название ветки',
    required=True,
    type=str
)

parser.add_argument(
    '-p', '--path',
    dest='path',
    help='Путь до директории с репозиториями',
    required=True,
    type=str
)

args = parser.parse_args()

def get_remote_branch(repo: git.Repo, name: str):
    remote = repo.remotes.origin

    return next(
        (r for r in remote.refs if r.name == f'origin/{ name }'),
        None
    )

def get_branch(repo: git.Repo, name: str):
    try:
        return repo.heads[name]
    except IndexError:
        remote_branch = get_remote_branch(repo, name)

        if remote_branch:
            remote = repo.remotes.origin
            result = remote.pull(name)

            # print(result)

            return remote_branch
        else:
            return None

def checkout(path: str, branch: str):
    dirs = next(os.walk('.'))[1]

    for name in dirs:
        try:
            repo = git.Repo(name)
        except git.exc.InvalidGitRepositoryError:
            print(f'{ name } — не репозиторий')
            continue

        br = get_branch(repo, args.branch)

        if br:
            repo.git.checkout(args.branch)
            print(f'checkout {br} in { name }')
        else:
            raise SystemExit(
                f'checkout: В репозитории «{ name }» нет ветки «{ args.branch }»'
            )


def pull(path: str, branch: str):

    dirs = os.listdir(path)

    # dirs = next(os.walk(os.path.abspath(path)))[1]

    for name in dirs:
        repoPath = os.path.join(path, name)

        try:
            repo = git.Repo(repoPath)
            print(f'\nРепозиторий { name }')
        except git.exc.InvalidGitRepositoryError:
            print(f'{ name } — не репозиторий')
            continue

        repo.git.fetch('origin', branch)
        print(f'    ❰ fetch ❱➤ {branch}')

        br = get_branch(repo, branch)

        if br:
            repo.git.checkout(branch)
            print(f'    ❰ checkout ❱➤ {br}')

            repo.git.pull()
            print(f'    ❰ pull ❱➤ {br}')
        else:
            raise SystemExit(
                f'pull: В репозитории «{ name }» нет ветки «{ branch }»'
            )


# checkout()

pull(args.path, args.branch)

# Конфигурации линтеров

## Установка

В директории, где расположены проекты:

```shell
git clone git@github.com:icw82/lint-configs.git
```

В этой же директории создать файлы:

```shell
touch .eslintrc.json
touch .stylelintrc.json
```

Заполнить содержимое ```.eslintrc.json```:

```json
{
    "extends": [
        "./lint-configs/eslint/base.json"
    ],
    "overrides": [
        {
            "files": [
                "**/*.ts",
                "**/*.tsx"
            ],
            "extends": [
                "./lint-configs/eslint/ts.json"
            ],
            "rules": {
                "@typescript-eslint/comma-dangle": [
                    "error",
                    "never"
                ]
            }
        },
        {
            "files": "**/*.js",
            "excludedFiles": "*.routes.js",
            "extends": [
                "./lint-configs/eslint/js.json"
            ]
        },
        {
            "files": "**/*.routes.js",
            "extends": [
                "./lint-configs/eslint/es.json"
            ]
        }
    ],
    "rules": {
        "no-console": [
            "error"
        ],
        "comma-dangle": [
            "error",
            "never"
        ]
    }
}```

Тут можно переопределить правила. Например, для того чтобы отобразить
некоторые фашистские корпоративные правила.

Заполнить содержимое ```.stylelintrc.json```:

```json
{
    "extends": [
        "./lint-configs/stylelint/base.json"
    ],
    "rules": {
        "comment-empty-line-before": "never",
        "selector-max-type": 0
    }
}
```

## Использование

<!--
NOTE:
В VS Code нужно выключить родную валидацию:
"css.validate": false,
"less.validate": false,
"scss.validate": false
-->

## Production build

**[Production App](https://master--boisterous-llama-639751.netlify.app/)**

## Запуск проекта

- `npm install` - установка зависимостей
- `npm run start:dev` - запуск dev сервера + запуск dev проекта на webpack
- `npm run start:dev:vite` - запуск dev сервера + запуск dev проекта на vite

---

## Скрипты

- `npm run start` - запуск dev проекта на webpack
- `npm run start:vite` - запуск dev проекта на vite
- `npm run start:dev` - запуск dev сервера + запуск dev проекта на webpack
- `npm run start:dev:vite` - запуск dev сервера + запуск dev проекта на vite
- `npm run start:dev:server` - запуск dev сервера
- `npm run build:dev` - сборка в dev режиме
- `npm run build:prod` - сборка в prod режиме
- `npm run prettier` - форматирование ts и json файлов
- `npm run lint:ts` - проверка ts файлов линтером
- `npm run lint:ts:fix` - исправление ts файлов линтером
- `npm run lint:scss` - проверка scss файлов style-линтером
- `npm run lint:scss:fix` - исправление scss файлов style-линтером
- `npm run test:unit` - запуск unit тесов с jest
- `npm run test:e2e` - запуск e2e тестов с cypress
- `npm run test:ui:ci` - запуск скриншотных тестов с loki
- `npm run test:ui:report` - генерация отчета по скриншотным тестам
- `npm run test:ui:ok` - подтверждения новых скриншотов
- `npm run storybook` - запуск storybook
- `npm run storybook:build` - сборка storybook
- `npm run prepare` - прекоммит хуки с husky

---

## Архитектура проекта

В проекте использовалась архитектурная методология для фронтенд проектов - **Feature-Sliced Design**

Документация методологии - [Feature-Sliced Design (FSD)](https://feature-sliced.design/ru/docs)

---

## Интернационализация проекта

Для интернационализации проекта используется библиотека i18next.
Переводы хранятся в public/locales.

Для комфортной работы с библиотекой рекомендуется установка соответствующих плагинов для среды разработки.

Документация библиотеки - [i18next](https://react.i18next.com/)

---

## Тестирование

Тестирование состоит их 4 типов тестов:
1) `npm run test:unit` - unit тестирование с jest
2) `npm run test:unit` - тестирование компонентов с React testing library
3) `npm run test:ui:ci` - скриншотное тестирование ui с loki
4) `npm run test:e2e` - e2e тестирование с cypress

[Подробнее о тестировании](./docs/test.md)

---

## Линтинг и форматирование

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.
Для форматирования используется prettier.

##### Скрипты для запуска линтеров и форматирования
- `npm run lint:ts` - проверка ts файлов линтером
- `npm run lint:ts:fix` - исправление ts файлов линтером
- `npm run lint:scss` - проверка scss файлов style-линтером
- `npm run lint:scss:fix` - исправление scss файлов style-линтером
- `npm run prettier` - форматирование ts и json файлов

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Для перехвата запросов на сервер используется storybook-addon-mock.

Файл со стори-кейсами (.stories.tsx) находятся рядом с компонентом.

`npm run storybook` - запуск storybook

[Подробнее о Storybook](./docs/storybook.md)

---

## Конфигурация проекта

Для разработки проект содержит 2 конфигурации:
1. Webpack - [config/build](./config/build)
2. vite - [vite.config.ts](./vite.config.ts)

Вся конфигурация хранится в /config
- [config/babel](./config/babel) - конфигурация babel
- [config/build](./config/build) - конфигурация webpack
- [config/jest](./config/jest) - конфигурация jest
- [config/storybook](./config/storybook) - конфигурация storybook

В папке `scripts` находятся различные скрипты для рефакторинга\генерации отчетов и тд.

---

## CI pipeline и pre-commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и storybook, линтинг.

В прекоммит хуках происходит проверка линтинга и форматирования измененных файлов с помощью `lint-staged`, конфиг 
находится в [/.husky](./.husky)

---

### Работа с состоянием проекта

Взаимодействие с данными осуществляется с помощью менеджера состояния redux toolkit.

Запросы на сервер отправляются с применением [RTK query](./src/shared/api/rtkApi.ts)
и [Axios в async thunk](./src/shared/api/api.ts).

Для асинхронного подключения reducer используется
[ReducerManager](./src/app/provider/Store/config/reducerManager.ts), применяемый в HOC
[DynamicModuleLoader](./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Сущности (entities) по FSD

- [Article](./src/entities/Article/README.md)
- [Comment](./src/entities/Comment/README.md)
- [Country](./src/entities/Country/README.md)
- [Currency](./src/entities/Currency/README.md)
- [Notification](./src/entities/Notification/README.md)
- [Profile](./src/entities/Profile/README.md)
- [Rating](./src/entities/Rating/README.md)
- [User](./src/entities/User/README.md)

---

## Фичи (features) по FSD

- [ArticleComments](./src/features/ArticleComments/README.md)
- [ArticleRating](./src/features/ArticleRating/README.md)
- [ArticleRecommendations](./src/features/ArticleRecommendations/README.md)
- [ArticlesSortSelector](./src/features/ArticlesSortSelector/README.md)
- [ArticlesTypeTabs](./src/features/ArticlesTypeTabs/README.md)
- [ArticleViewSelector](./src/features/ArticleViewSelector/README.md)
- [AuthByUsername](./src/features/AuthByUsername/README.md)
- [EditableArticleDetails](./src/features/EditableArticleDetails/README.md)
- [EditableProfileCard](./src/features/EditableProfileCard/README.md)
- [LangSwitcher](./src/features/LangSwitcher/README.md)
- [MenuAvatar](./src/features/MenuAvatar/README.md)
- [NotificationPopover](./src/features/NotificationPopover/README.md)
- [ProfileRating](./src/features/ProfileRating/README.md)
- [ThemeSwitcher](./src/features/ThemeSwitcher/README.md)

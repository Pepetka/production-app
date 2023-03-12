## Фича редактируемой карточки профиля

#### Public api

- Components

`EditableProfileCard` - компонент с редактируемым профилем

- types

`ProfileSchema` - тип, описывающий часть состояния приложения, относящейся к редактированию профиля

- consts

`ValidateProfileError` - перечисление ошибок валидации данных профиля

- slice

`profileActions` - actions, относящиеся к редактированию профиля

`profileReducer` - reducer, относящийся к редактированию профиля

- services

`updateProfileData` - сервис обновления данных профиля

- selectors

`getProfileReadOnly` - селектор для получения данных о возможности редактирования профиля

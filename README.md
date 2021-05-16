# test

### 2. Таблица на странице

В текст [статьи на странице](https://codepen.io/kizoso/pen/VwpeeRY)
с адаптивной версткой менеджеры добавили таблицу.
На десктопе таблицы выглядят хорошо,
но на мобиле - появляется горизонтальный скролл, верстка едет. Что делать?

Первым делом убираем медиа запросом фиксированную длину контейнера
@media (max-width: 992px) {
.blog {
width: auto;
}
}

Делее, на экране 386px нужно адаптировать саму таблицу
задать всем td display: block; и убрать фиксированные величины.

- Contains configuration for `gulp`, `stylelint`, `eslint`
- CSS preprocessor `SCSS`

## Installation

1. Open terminal in `<your-folder-name>`
2. Run `npm i`

## Commands

`gulp` - run for dev mode with watcher

`gulp --dist` - run for build distribution package (contains minified img, js, css, converts and adds webp to html)

## Folders structure

```
Base template
│   README.md
│   gulpfile.js
│   ...linters...
│   ...
│
└───src
│   └───fonts
│   └───img
│   └───js
│   └───scss
│   └───upload
│   index.html
│   ...
│
└───dist
│   └───fonts
│   └───img
│   └───js
│   └───css
│   └───upload
│   index.html
│   ...
│
└───build
│   └───fonts
│   └───img
│   └───js
│   └───css
│   └───upload
│   index.html
│   ...
│
```

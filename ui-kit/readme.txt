https://krinopotam.github.io/-krinopotam/ui-kit/demo
https://krinopotam.github.io/-krinopotam/ui-kit/storybook

Проверить, не стала ли ahooks поддерживать react 19
если поддерживает, то удалить из package.json 
  "overrides": {
    "ahooks": {
      "react": "$react",
      "react-dom": "$react-dom"
    }
  }


Если после обновления ph-pages начнет выдавать ошибки ENAMETOOLONG, посмотреть решение здесь https://github.com/tschaub/gh-pages/issues/585
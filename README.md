## Veter 비활성화하기

### vue3, ts를 지원하는 플러그인 설치.

* Vue language Features (Volar) 설치
* TypeScript Vue Plugin (Volar) 설치
* Veter 비활성화 시키기
* 껐다 켜기



### class 에러 해결하기

### JSX issues in template

template에서 에러남 아래처럼

```
Property 'class' does not exist on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'. Did you mean 'className'?
```

tsconfig.json 업데이트

```json
// tsconfig.json
{
  // https://v3.nuxtjs.org/concepts/typescript
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "types": [
      "vite/client"
    ]
  },
  "exclude": ["**/*.stories.ts"]
}
```

이러면 `*.stories.ts` 파일에서 모듈 불러오기에러가나는데 못고치겠다



## Storybook 설치

```bash
$ yarn add -D @storybook/vue3 @storybook/addon-essentials @storybook/builder-vite storybook-builder-vite
```

`.storybook` 디렉토리 생성 후 `main.js` 파일 넣기

```bash
$ mkdir .storybook
$ touch .storybook/main.js
```

```javascript
// .storybook/main.js

module.exports = {
  stories: ['../components/stories/**/*.stories.mdx', '../components/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
}
```



pakage.json에 storybook 명령추가

```json
{
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "storybook": "start-storybook" \\ 追記
  },
  "devDependencies": {
    "@storybook/addon-essentials": "^6.4.22",
    "@storybook/vue3": "^6.4.22",
    "nuxt": "3.0.0-rc.1",
    "storybook-builder-vite": "^0.1.23"
  }
}
```



작동 확인

```bash
$ yarn storybook
```



### 글로벌 SCSS를 로드할 수 있도록 설정

```bash
$ yarn add -D sass
```



assets폴더 생성

```bash
$ mkdir -p assets/styles
$ touch assets/styles/global.scss
```



```javascript
// nuxt.config.ts

import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global.scss";',
        },
      },
    },
  },
})
```

```javascript
// .storybook/main.js

const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../components/stories/**/*.stories.mdx', '../components/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "../assets/styles/global.scss";',
          },
        },
      },
    })
  },
}
```





### 절대경로 사용법

```javascript
// .storybook/main.js
const { mergeConfig } = require('vite')
const path = require('path') // 追加

module.exports = {
  stories: ['../components/stories/**/*.stories.mdx', '../components/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "../assets/styles/global.scss";',
          },
        },
      },
      // ↓追加
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
          '~': path.resolve(__dirname, '../')
        },
      },
    })
  },
}
```


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
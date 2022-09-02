import TApplySearchName from './TApplySearchName.vue';
import { Meta, StoryFn } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router';
import { action } from '@storybook/addon-actions';

export default {
  title: 'templates/TApplySearchName',
  component: TApplySearchName,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof TApplySearchName>

const Template:StoryFn<typeof TApplySearchName> = (args) => ({
  components: { TApplySearchName },
  setup() {
    return {
      args,
    }
  },
  template: `
    <TApplySearchName v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  name: 'example1',
}

const router = [
  { 
    name: '법인유형 선택',
    path: '/apply/selectType'
  },
  { 
    name: '법인명 조회',
    path: '/apply/searchName'
  },
  { 
    name: '주식정보 입력',
    path: '/apply/enterStock'
  },
  { 
    name: '서비스 선택',
    path: '/apply/selectService'
  },
  { 
    name: '간편결제',
    path: '/apply/payment'
  },
]
/* define our custom routes */
const stepRoute = router.map(r => {
  return { 
    ...r, 
    component: Main,
    beforeEnter: (to, from) => action('beforeEnter')({ from: from.fullPath, to: to.fullPath }),
  }
});

Main.decorators = [
  vueRouter(stepRoute, {
    initialRoute: '/apply/searchName'
  })
]
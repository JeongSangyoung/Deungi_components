import MApplicationStep from './MApplicationStep.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import vueRouter from 'storybook-vue3-router';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/MApplicationStep',
  component: MApplicationStep,
  argTypes: {
    items: {
      description: '아이템의 원소는 { name: `string`, path: `string` }',
    }
  }
} as Meta<typeof MApplicationStep>

const Template:StoryFn<typeof MApplicationStep> = (args) => ({
  components: { MApplicationStep },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MApplicationStep v-bind="args">
      <router-view></router-view>
    </MApplicationStep>
  `,
})

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

export const StepExample = Template.bind({})
StepExample.args = {
  items: router
}
/* define our custom routes */
const stepRoute = router.map(r => {
  return { 
    ...r, 
    component: MApplicationStep,
    beforeEnter: (to, from) => action('beforeEnter')({ from: from.fullPath, to: to.fullPath }),
  }
});

StepExample.decorators = [
  vueRouter(stepRoute, {
    initialRoute: '/apply/selectType'
  })
]
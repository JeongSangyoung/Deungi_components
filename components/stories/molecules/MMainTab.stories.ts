import MMainTab from './MMainTab.vue';
import { Meta, StoryFn } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'

export default {
  title: 'molecules/MMainTab',
  component: MMainTab,
} as Meta<typeof MMainTab>

const Template:StoryFn<typeof MMainTab> = (args) => ({
  components: { MMainTab },
  setup() {
    return {
      args,
    }
  },
  template: `
      <MMainTab v-bind="args">
        <router-view></router-view>
      </MMainTab>
  `,
})


const router = [
  {
    path: '/',
    name: '등기24 법인설립',
  },
  {
    path: '/cost',
    name: '비용안내',
  },
  {
    path: '/event',
    name: '등기24 단독혜택',
  },
  {
    path: '/review',
    name: '이용 후기',
  },
]

export const MaintabExample = Template.bind({})
MaintabExample.args = {
  items: router
}

const mainRoute = router.map(r => {
  return { ...r, component: MMainTab}
});

MaintabExample.decorators = [
  vueRouter(mainRoute, {
    initialRoute: '/',
  })
]
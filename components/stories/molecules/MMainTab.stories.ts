import MMainTab from './MMainTab.vue';
import { Meta, StoryFn } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'
import { action } from '@storybook/addon-actions';

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
    name: 'home',
  },
  {
    path: '/cost',
    name: 'cost',
  },
  {
    path: '/event',
    name: 'event',
  },
  {
    path: '/review',
    name: 'review',
  },
]

export const MaintabExample = Template.bind({})
MaintabExample.args = {
  items: router
}

const mainRoute = router.map(r => {
  return { 
    ...r, 
    component: MMainTab,
    beforeEnter: (to, from) => action('beforeEnter')({from: from.fullPath, to: to.fullPath }),
  }
});

MaintabExample.decorators = [
  vueRouter(mainRoute, {
    initialRoute: '/',
  })
]
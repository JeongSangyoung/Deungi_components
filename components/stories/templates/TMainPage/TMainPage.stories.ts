import TMainPage from './TMainPage.vue';
import { Meta, StoryFn } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'
import { action } from '@storybook/addon-actions';

import OMainReview from '@/components/stories/organisms/OMainReview/OMainReview.vue';
import OMainCosts from '@/components/stories/organisms/OMainCosts/OMainCosts.vue';
import OMainCount from '@/components/stories/organisms/OMainCount/OMainCount.vue';
import OMainEvent from '@/components/stories/organisms/OMainEvent/OMainEvent.vue';

export default {
  title: 'templates/TMainPage',
  component: TMainPage,
} as Meta<typeof TMainPage>

const Template:StoryFn<typeof TMainPage> = (args) => ({
  components: { TMainPage },
  setup() {
    return {
      args,
    }
  },
  template: `
    <TMainPage v-bind="args" />
  `,
})

const router = [
  {
    path: '/',
    name: '등기24 법인설립',
    component: OMainCount
  },
  {
    path: '/cost',
    name: '비용안내',
    component: OMainCosts
  },
  {
    path: '/event',
    name: '등기24 단독혜택',
    component: OMainEvent
  },
  {
    path: '/review',
    name: '이용 후기',
    component: OMainReview
  },
]

export const MainPage = Template.bind({})

const mainRoute = router.map(r => {
  return { 
    ...r, 
    beforeEnter: (to, from) => action('beforeEnter')({from: from.fullPath, to: to.fullPath }),
  }
});

MainPage.decorators = [
  vueRouter(mainRoute, {
    initialRoute: '/event',
  })
]
import OMainCount from './OMainCount.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMainCount',
  component: OMainCount,
} as Meta<typeof OMainCount>

const Template:StoryFn<typeof OMainCount> = (args) => ({
  components: { OMainCount },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMainCount v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  items: [
    {
      header: '누적 이용자 수',
      contentColor: '#3952B3',
      contentCount: '66',
      contentUnit: '만명',
      description: '2022년 8월 기준',
      image: 'https://deungi24.com/img/prolist01.svg',
    },
    {
      header: '방문없이 즉시 설립',
      contentCount: '66',
      contentUnit: '만명',
      description: '2022년 8월 기준',
      image: 'https://deungi24.com/img/prolist02.svg',
    },
    {
      header: '8월 기준 국내 최저가',
      contentCount: '179,000',
      contentUnit: '원',
      description: '오프라인 법무사 대비 50%절감',
      image: 'https://deungi24.com/img/prolist03.svg',
    },
  ]
}

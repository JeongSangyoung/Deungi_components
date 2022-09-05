import MMainCountCard from './MMainCountCard.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'molecules/MMainCountCard',
  component: MMainCountCard,
  argTypes: {
    items: {
      description: '아이템의 원소는 { name: `string`, path: `string` }',
    }
  }
} as Meta<typeof MMainCountCard>

const Template:StoryFn<typeof MMainCountCard> = (args) => ({
  components: { MMainCountCard },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MMainCountCard v-bind="args" />
  `,
})

export const CardExample = Template.bind({})
CardExample.args = {
  header: '누적 이용자 수',
  contentColor: '#3952B3',
  contentCount: '66',
  contentUnit: '만명',
  description: '2022년 8월 기준',
  image: 'https://deungi24.com/img/prolist01.svg',
}

const TemplateList:StoryFn<typeof MMainCountCard> = (args) => ({
  components: { MMainCountCard },
  setup() {
    return {
      args,
    }
  },
  template: `
    <div v-bind="args" style="display: flex;">
      <MMainCountCard 
        v-for="item in args.items" 
        :key="item.header" 
        v-bind="item" 
      />
    </div>
  `,
})

export const CardList = TemplateList.bind({})

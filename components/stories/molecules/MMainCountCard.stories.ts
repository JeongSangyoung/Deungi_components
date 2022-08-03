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
    <MMainCountCard v-bind="args">
      <template #header>
        <h2>누적 이용자 수</h2>
      </template>

      <template #content>
        <span style="font-weight-bold; font-size:66px; color:#3952B3">66</span>
        <span style="font-weight-bold; font-size:32px; color:#3952B3">만명</span>
      </template>

      <template #description>
        <p>C</p>
      </template>
    </MMainCountCard>
  `,
})



export const CardExample = Template.bind({})
CardExample.args = {
  image: 'https://deungi24.com/img/prolist03.svg'
}

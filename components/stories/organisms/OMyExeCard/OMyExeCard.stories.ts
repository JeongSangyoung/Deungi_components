import OMyExeCard from './OMyExeCard.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMyExeCard',
  component: OMyExeCard,
} as Meta<typeof OMyExeCard>

const Template:StoryFn<typeof OMyExeCard> = (args) => ({
  components: { OMyExeCard },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMyExeCard v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  
}

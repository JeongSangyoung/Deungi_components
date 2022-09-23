import OMyHistory from './OMyHistory.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMyHistory',
  component: OMyHistory,
} as Meta<typeof OMyHistory>

const Template:StoryFn<typeof OMyHistory> = (args) => ({
  components: { OMyHistory },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMyHistory v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  
}

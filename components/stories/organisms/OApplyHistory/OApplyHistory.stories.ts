import OApplyHistory from './OApplyHistory.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyHistory',
  component: OApplyHistory,
} as Meta<typeof OApplyHistory>

const Template:StoryFn<typeof OApplyHistory> = (args) => ({
  components: { OApplyHistory },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyHistory v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
}
import OAdminHistory from './OAdminHistory.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OAdminHistory',
  component: OAdminHistory,
  argTypes: {
  }
} as Meta<typeof OAdminHistory>

const Template:StoryFn<typeof OAdminHistory> = (args) => ({
  components: { OAdminHistory },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OAdminHistory v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
}
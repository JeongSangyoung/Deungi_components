import OAdminHistoryDetail from './OAdminHistoryDetail.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OAdminHistoryDetail',
  component: OAdminHistoryDetail,
  argTypes: {
  }
} as Meta<typeof OAdminHistoryDetail>

const Template:StoryFn<typeof OAdminHistoryDetail> = (args) => ({
  components: { OAdminHistoryDetail },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OAdminHistoryDetail v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
}
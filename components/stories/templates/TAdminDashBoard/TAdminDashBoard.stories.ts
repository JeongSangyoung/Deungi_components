import TAdminDashBoard from './TAdminDashBoard.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'templates/TAdminDashBoard',
  component: TAdminDashBoard,
  argTypes: {
    'onSubmit': {}
  }
} as Meta<typeof TAdminDashBoard>

const Template:StoryFn<typeof TAdminDashBoard> = (args) => ({
  components: { TAdminDashBoard },
  setup() {
    return {
      args,
    }
  },
  template: `
    <TAdminDashBoard v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {}

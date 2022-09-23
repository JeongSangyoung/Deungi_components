import OAdminMenu from './OAdminMenu.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OAdminMenu',
  component: OAdminMenu,
  argTypes: {
    onVerify: {},
  }
} as Meta<typeof OAdminMenu>

const Template:StoryFn<typeof OAdminMenu> = (args) => ({
  components: { OAdminMenu },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OAdminMenu v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
}
import OMyProfile from './OMyProfile.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMyProfile',
  component: OMyProfile,
} as Meta<typeof OMyProfile>

const Template:StoryFn<typeof OMyProfile> = (args) => ({
  components: { OMyProfile },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMyProfile v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  
}

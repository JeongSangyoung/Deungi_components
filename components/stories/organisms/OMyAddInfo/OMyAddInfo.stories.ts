import OMyAddInfo from './OMyAddInfo.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMyAddInfo',
  component: OMyAddInfo,
} as Meta<typeof OMyAddInfo>

const Template:StoryFn<typeof OMyAddInfo> = (args) => ({
  components: { OMyAddInfo },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMyAddInfo v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  
}

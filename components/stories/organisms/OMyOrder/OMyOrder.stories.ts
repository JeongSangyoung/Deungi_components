import OMyOrder from './OMyOrder.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMyOrder',
  component: OMyOrder,
} as Meta<typeof OMyOrder>

const Template:StoryFn<typeof OMyOrder> = (args) => ({
  components: { OMyOrder },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMyOrder v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  
}

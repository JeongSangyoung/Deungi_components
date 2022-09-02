import MBill from './OBill.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OBill',
  component: MBill,
} as Meta<typeof MBill>

const Template:StoryFn<typeof MBill> = (args) => ({
  components: { MBill },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MBill v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  corpname: '주식회사 보로노이'
}
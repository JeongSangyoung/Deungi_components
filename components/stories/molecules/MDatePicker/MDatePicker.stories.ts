import MDatePicker from './MDatePicker.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'molecules/MDatePicker',
  component: MDatePicker,
  argTypes: {
    'onUpdate:pickStart': {},
    'onUpdate:pickEnd': {},
  }
} as Meta<typeof MDatePicker>

const Template:StoryFn<typeof MDatePicker> = (args) => ({
  components: { MDatePicker },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MDatePicker v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  mode: 'start',
  pickStart: new Date(),
  pickEnd: new Date(),
}
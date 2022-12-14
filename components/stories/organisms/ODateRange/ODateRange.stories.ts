import ODateRange from './ODateRange.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { format } from '@/components/stories/molecules/MDatePicker/datePicker';

export default {
  title: 'organisms/ODateRange',
  component: ODateRange,
  argTypes: {
    'onUpdate:pickStart': {},
    'onUpdate:pickEnd': {},
  }
} as Meta<typeof ODateRange>

const Template:StoryFn<typeof ODateRange> = (args) => ({
  components: { ODateRange },
  setup() {
    return {
      args,
    }
  },
  template: `
    <ODateRange v-bind="args" />
  `,
})

export const Main = Template.bind({})
Main.args = {
  pickStart: format(new Date()),
  pickEnd: format(new Date()),
}
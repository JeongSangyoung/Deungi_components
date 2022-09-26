import ODateRange from './ODateRange.vue';
import { Meta, StoryFn } from '@storybook/vue3';

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
  pickStart: new Date('2022-1-2'),
  pickEnd: new Date(),
}
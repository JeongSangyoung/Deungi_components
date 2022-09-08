import OMainEvent from './OMainEvent.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMainEvent',
  component: OMainEvent,
} as Meta<typeof OMainEvent>

const Template:StoryFn<typeof OMainEvent> = (args) => ({
  components: { OMainEvent },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMainEvent v-bind="args" />
  `,
})

export const Main = Template.bind({})
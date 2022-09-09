import OMainHeader from './OMainHeader.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMainHeader',
  component: OMainHeader,
} as Meta<typeof OMainHeader>

const Template:StoryFn<typeof OMainHeader> = (args) => ({
  components: { OMainHeader },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMainHeader v-bind="args" />
  `,
})

export const Main = Template.bind({})
import OMainCosts from './OMainCosts.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OMainCosts',
  component: OMainCosts,
} as Meta<typeof OMainCosts>

const Template:StoryFn<typeof OMainCosts> = (args) => ({
  components: { OMainCosts },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OMainCosts v-bind="args" />
  `,
})

export const Main = Template.bind({})
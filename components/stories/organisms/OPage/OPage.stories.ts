import OPage from './OPage.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OPage',
  component: OPage,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof OPage>

const Template:StoryFn<typeof OPage> = (args) => ({
  components: { OPage },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OPage v-bind="args" />
  `,
})

export const example = Template.bind({})

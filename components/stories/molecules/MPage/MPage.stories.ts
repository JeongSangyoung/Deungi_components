import MPage from './MPage.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'molecules/MPage',
  component: MPage,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof MPage>

const Template:StoryFn<typeof MPage> = (args) => ({
  components: { MPage },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MPage v-bind="args" />
  `,
})

export const example = Template.bind({})
example.args = {
  modelValue: 1,
  total: 200
}

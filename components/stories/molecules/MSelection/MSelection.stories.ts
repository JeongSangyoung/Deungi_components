import MSelection from './MSelection.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MSelection',
  component: MSelection,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof MSelection>

const Template:StoryFn<typeof MSelection> = (args) => ({
  components: { MSelection },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MSelection v-bind="args" />
  `,
})

export const selection = Template.bind({})
selection.args = {
  modelValue: 0,
  contents: [
    "문재인", "홍준표", "윤석열", "이재명"
  ],
}
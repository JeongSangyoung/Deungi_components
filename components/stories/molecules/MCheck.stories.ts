import MCheck from './MCheck.vue';
import { Meta, StoryFn } from '@storybook/vue3'


export default {
  title: 'molecules/MCheck',
  component: MCheck,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof MCheck>

const Template:StoryFn<typeof MCheck> = (args) => ({
  components: { MCheck },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MCheck v-bind="args" />
  `,
})

export const CheckExample = Template.bind({})
CheckExample.args = {
  modelValue: true,
  label: '체크박스'
}

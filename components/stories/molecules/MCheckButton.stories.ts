import MCheckButton from './MCheckButton.vue';
import { Meta, StoryFn } from '@storybook/vue3'


export default {
  title: 'molecules/MCheckButton',
  component: MCheckButton,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof MCheckButton>

const Template:StoryFn<typeof MCheckButton> = (args) => ({
  components: { MCheckButton },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MCheckButton v-bind="args">
      여기에 Slot...<br />
      Slot...
    </MCheckButton>
  `,
})

export const CheckExample = Template.bind({})
CheckExample.args = {
  name: 'example1',
}

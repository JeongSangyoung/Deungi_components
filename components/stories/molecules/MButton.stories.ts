import MButton from './MButton.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MButton',
  component: MButton,
  argTypes: { 
    backgroundColor: {
      control: 'color'
    },
    onClick: {
      action: 'clicked'
    }
  },
} as Meta<typeof MButton>

const Template:StoryFn<typeof MButton> = (args) => ({
  components: { MButton },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MButton v-bind="args">
      <h3 style="color: white">Sample Button</h3>
    </MButton>
  `,
})

export const ButtonExample = Template.bind({})
ButtonExample.args = {
  backgroundColor: '#3952B3',
}

export const RoundedButton = Template.bind({})
RoundedButton.args = {
  rounded: true,
  backgroundColor: '#3952B3',
}
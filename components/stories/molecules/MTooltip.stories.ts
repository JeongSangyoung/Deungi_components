import MTooltip from './MTooltip.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MTooltip',
  component: MTooltip,
} as Meta<typeof MTooltip>

const Template:StoryFn<typeof MTooltip> = (args) => ({
  components: { MTooltip },
  setup() {
    return {
      args,
    }
  },
  argTypes: {
    slotContent: {
      control: 'text',
      description: 'Slot content',
      defaultValue: `
        <h3>Sample Tooltip - Title</h3>
        <p>Content</p>
      `
    }
  },
  template: `
    <MTooltip v-bind="args">
      {{ args.slotContent }}
    </MTooltip>
  `,
})

export const TooltipExample = Template.bind({})
TooltipExample.args = {
  name: '등기25',
  charge: '개발팀',
}

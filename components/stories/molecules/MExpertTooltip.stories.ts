import MExpertTooltip from './MExpertTooltip.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MExpertTooltip',
  component: MExpertTooltip,
} as Meta<typeof MExpertTooltip>

const Template:StoryFn<typeof MExpertTooltip> = (args) => ({
  components: { MExpertTooltip },
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
    <MExpertTooltip v-bind="args">
      {{ args.slotContent }}
    </MExpertTooltip>
  `,
})

export const TooltipExample = Template.bind({})
TooltipExample.args = {
  name: '등기25',
  charge: '개발팀',
}

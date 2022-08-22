import MMapArea from './MMapArea.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MMapArea',
  component: MMapArea,
  argTypes: {
    onClick: {}
  }
} as Meta<typeof MMapArea>

const Template:StoryFn<typeof MMapArea> = (args) => ({
  components: { MMapArea },
  setup() {
    return {
      args,
    }
  },
  template: `
      <MMapArea v-bind="args" />
  `,
})


export const AreaExample = Template.bind({})
AreaExample.args = {}

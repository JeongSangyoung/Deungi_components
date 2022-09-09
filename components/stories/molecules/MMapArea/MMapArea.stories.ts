import MMapArea from './MMapArea.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MMapArea',
  component: MMapArea,
  argTypes: {
    'onUpdate:location': {},
    onVerified: {},
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
AreaExample.args = {
  location: {
    sido: '경기',
    sigungu: '과천시',
    third: ''
  }
}

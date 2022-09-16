import MSelectServiceGroup from './MSelectServiceGroup.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MSelectServiceGroup',
  component: MSelectServiceGroup,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof MSelectServiceGroup>

const Template:StoryFn<typeof MSelectServiceGroup> = (args) => ({
  components: { MSelectServiceGroup },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MSelectServiceGroup v-bind="args" />
  `,
})

export const GroupExample = Template.bind({})
GroupExample.args = {
  name: 'example',
  modelValue: 0,
  items: [
    {
      duration: '5일',
      advantage: '방문없이 빠르고 편리한',
      method: '전자 등기',
      image: {
        checked: 'https://deungi24.com/img/ico_list9_on.png',
        unchecked: 'https://deungi24.com/img/ico_list9.png'
      },
      cost: '179,000'
    },
    {
      duration: '9일',
      advantage: '서류를 등기로 보내 주세요',
      method: '서류 등기',
      image: {
        checked: 'https://deungi24.com/img/ico_list10_on.png',
        unchecked: 'https://deungi24.com/img/ico_list10.png'
      },
      cost: '379,000'
    },
  ]
}
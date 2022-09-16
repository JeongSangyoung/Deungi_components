import OApplyPayby from './OApplyPayby.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyPayby',
  component: OApplyPayby,
  argTypes: {
    'onUpdate:modelValue': {},
  }
} as Meta<typeof OApplyPayby>

const Template:StoryFn<typeof OApplyPayby> = (args) => ({
  components: { OApplyPayby },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyPayby v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
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
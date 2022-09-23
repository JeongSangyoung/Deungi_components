import MButtonGroup from './MButtonGroup.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MButtonGroup',
  component: MButtonGroup,
  argTypes: { 
    'onUpdate:modelValue': {}
  },
} as Meta<typeof MButtonGroup>

const Template:StoryFn<typeof MButtonGroup> = (args) => ({
  components: { MButtonGroup },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MButtonGroup v-bind="args">
      <h3 style="color: white">Sample Button</h3>
    </MButtonGroup>
  `,
})

export const ButtonExample = Template.bind({})
ButtonExample.args = {
  items: [
    {
      text: '전체',
      background: '#6C757D',
      number: 0,
    },
    {
      text: '담당자 배정대기',
      background: 'tomato',
      number: 0,
    },
    {
      text: '정보입력 대기중',
      background: '#FFC800',
      number: 60,
    },
    {
      text: '등기매니저 확인중',
      background: '#079D05',
      number: 16,
    },
    {
      text: '추가결제 대기중',
      background: '#523FF1',
      number: 1,
    },
    {
      text: '최종컨펌 대기중',
      background: '#523FF1',
      number: 2,
    },
    {
      text: '등기 준비중',
      background: '#FF4BD8',
      number: 26,
    },
    {
      text: '등기 완료',
      background: '#121212',
      number: 1189,
    },
    {
      text: '환불 완료',
      background: '#858585',
      number: 146,
    },

  ]
}

import MInput from './MInput.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MInput',
  component: MInput,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof MInput>

const Template:StoryFn<typeof MInput> = (args) => ({
  components: { MInput },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MInput v-bind="args" />
  `,
})

export const InputExample = Template.bind({})
InputExample.args = {
  maxWidth: '700px',
  placeHolder: '회사명을 입력해주세요'
}

export const Rounded = Template.bind({})
Rounded.args = {
  maxWidth: '700px',
  placeHolder: '이메일 입력하세요',
  rounded: true,
}

export const PrevImage = Template.bind({})
PrevImage.args = {
  maxWidth: '700px',
  prevImage: 'https://deungi24.com/img/bg_login_id.png',
  placeHolder: '이메일 입력하세요',
  rounded: true,
}

export const SetUnit = Template.bind({})
SetUnit.args = {
  maxWidth: '700px',
  placeHolder: '환율은 얼마인가요?',
  unit: '원/달러',
}
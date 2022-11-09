import MRadioGroup from './MRadioGroup.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MRadioGroup',
  component: MRadioGroup,
  argTypes: {
    name: {
      description: '일종의 key 역할'
    },
    'onUpdate:modelValue': {}
  }
} as Meta<typeof MRadioGroup>

const Template:StoryFn<typeof MRadioGroup> = (args) => ({
  components: { MRadioGroup },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MRadioGroup v-bind="args" />
  `,
})

export const CheckExample = Template.bind({})
CheckExample.args = {
  modelValue: 1,
  name: 'service1',
  contents: [
    '일번가',
    '십일번가'
  ],
}

export const SetInline = Template.bind({})
SetInline.args = {
  name: 'service2',
  contents: [
    '일번가',
    '십일번가'
  ],
  setInline: true,
}

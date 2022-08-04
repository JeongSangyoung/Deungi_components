import MCheckGroup from './MCheckGroup.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MCheckGroup',
  component: MCheckGroup,
  argTypes: {
    name: {
      description: '일종의 key 역할'
    },
    onCheck: {}
  }
} as Meta<typeof MCheckGroup>

const Template:StoryFn<typeof MCheckGroup> = (args) => ({
  components: { MCheckGroup },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MCheckGroup v-bind="args" />
  `,
})

export const CheckExample = Template.bind({})
CheckExample.args = {
  items: [
    {
      content: '서비스 이용약관 동의(필수)',
      name: 'service',
    },
    {
      content: '마케팅 동의(선택)',
      name: 'marketing',
    }
  ]
}

export const SetInline = Template.bind({})
SetInline.args = {
  items: [
    {
      content: '외국인',
      name: 'foreigner',
    },
    {
      content: '미성년자',
      name: 'child',
    }
  ],
  setInline: true,
}

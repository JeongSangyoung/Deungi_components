import MInputSelection from './MInputSelection.vue';
import { Meta, StoryFn } from '@storybook/vue3'


export default {
  title: 'molecules/MInputSelection',
  component: MInputSelection,
  argTypes: {
    onInputcheck: {}
  }
} as Meta<typeof MInputSelection>

const Template:StoryFn<typeof MInputSelection> = (args) => ({
  components: { MInputSelection },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MInputSelection v-bind="args" />
  `,
})

export const InputExample = Template.bind({})
InputExample.args = {
  maxWidth: '700px',
  placeHolder: '회사명을 입력해주세요',
  checkItems: [
    {
      content: '외국인',
      name: 'foreigner',
    },
    {
      content: '미성년자',
      name: 'child',
    }
  ],
}

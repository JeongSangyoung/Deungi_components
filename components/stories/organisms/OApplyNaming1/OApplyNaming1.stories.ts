import OApplyNaming1 from './OApplyNaming1.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyNaming1',
  component: OApplyNaming1,
  argTypes: {
    onVerify: {}
  }
} as Meta<typeof OApplyNaming1>

const Template:StoryFn<typeof OApplyNaming1> = (args) => ({
  components: { OApplyNaming1 },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyNaming1 v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  modelValue: '보로노이',
  location: {
    sido: '경남',
    sigungu: '창원시',
    third: '용호동'
  }
}
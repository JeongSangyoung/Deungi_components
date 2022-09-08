import OApplyExecutives from './OApplyExecutives.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyExecutives',
  component: OApplyExecutives,
  argTypes: {
    onVerify: {}
  }
} as Meta<typeof OApplyExecutives>

const Template:StoryFn<typeof OApplyExecutives> = (args) => ({
  components: { OApplyExecutives },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyExecutives v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  state: {
    executives: [
      {
        name: '테스트감사',
        charge: '감사',
        underage: true,
        foreigner: false,
      },
      {
        name: '테스트법인',
        charge: '법인',
        underage: false,
        foreigner: true,
      },
      {
        name: '김개인',
        charge: '개인',
        underage: true,
        foreigner: true,
      }
    ],
  },
  propsData: {
    corpName: '주식회사 보로노이'
  }
}
import OApplyCapital from './OApplyCapital.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyCapital',
  component: OApplyCapital,
  argTypes: {
    onVerify: {}
  }
} as Meta<typeof OApplyCapital>

const Template:StoryFn<typeof OApplyCapital> = (args) => ({
  components: { OApplyCapital },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyCapital v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  state: {
    capital: 100,
  },
  propsData: {
    corpName: '주식회사 보로노이'
  }
}
import OApplyNaming2 from './OApplyNaming2.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyNaming2',
  component: OApplyNaming2,
  argTypes: {
    'onUpdate:modelValue': {},
    onVerify: {}
  }
} as Meta<typeof OApplyNaming2>

const Template:StoryFn<typeof OApplyNaming2> = (args) => ({
  components: { OApplyNaming2 },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyNaming2 v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  modelValue: -1,
  corpName: 'TEST보로노이'
}
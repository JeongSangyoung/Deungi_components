import OApplySign from './OApplySign.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplySign',
  component: OApplySign,
  argTypes: {
    'onUpdate:values': {},
    onVerify: {},
  }
} as Meta<typeof OApplySign>

const Template:StoryFn<typeof OApplySign> = (args) => ({
  components: { OApplySign },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplySign v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  email: '',
  applicant: '',
}
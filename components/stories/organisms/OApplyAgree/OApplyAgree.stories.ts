import OApplyAgree from './OApplyAgree.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyAgree',
  component: OApplyAgree,
} as Meta<typeof OApplyAgree>

const Template:StoryFn<typeof OApplyAgree> = (args) => ({
  components: { OApplyAgree },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyAgree v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
}
import OApplyExecutives from './OApplyExecutives.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyExecutives',
  component: OApplyExecutives,
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
  corpname: '주식회사 보로노이'
}
import OApplyCostSelect from './OApplyCostSelect.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyCostSelect',
  component: OApplyCostSelect,
} as Meta<typeof OApplyCostSelect>

const Template:StoryFn<typeof OApplyCostSelect> = (args) => ({
  components: { OApplyCostSelect },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyCostSelect v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  
}
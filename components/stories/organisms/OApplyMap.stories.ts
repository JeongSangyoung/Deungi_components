import OApplyMap from './OApplyMap.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplyMap',
  component: OApplyMap,
} as Meta<typeof OApplyMap>

const Template:StoryFn<typeof OApplyMap> = (args) => ({
  components: { OApplyMap },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplyMap v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {}
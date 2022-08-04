import MMainBenefitCard from './MMainBenefitCard.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'molecules/MMainBenefitCard',
  component: MMainBenefitCard,
  argTypes: {
  }
} as Meta<typeof MMainBenefitCard>

const Template:StoryFn<typeof MMainBenefitCard> = (args) => ({
  components: { MMainBenefitCard },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MMainBenefitCard v-bind="args" />
  `,
})

export const CardExample = Template.bind({})

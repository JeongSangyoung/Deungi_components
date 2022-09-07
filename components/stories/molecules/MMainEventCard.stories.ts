import MMainEventCard from './MMainEventCard.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'molecules/MMainEventCard',
  component: MMainEventCard,
  argTypes: {
  }
} as Meta<typeof MMainEventCard>

const Template:StoryFn<typeof MMainEventCard> = (args) => ({
  components: { MMainEventCard },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MMainEventCard v-bind="args">
      <template #header>
        혜택1
      </template>

      <template #content>
        <img src="https://deungi24.com/img/img_benefit_3.png" />
    
      </template>

    </MMainEventCard>
  `,
})

export const CardExample = Template.bind({})

import MFoldable from './MFoldable.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MFoldable',
  component: MFoldable,
} as Meta<typeof MFoldable>

const Template:StoryFn<typeof MFoldable> = (args) => ({
  components: { MFoldable },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MFoldable>
      <template #header>
        <h2 class="ma-0">주식회사 TEST보로노이 법인 설립 신청 내역</h2>
      </template>
      <template #content>
        <ul>
          <li>Content 1</li>
          <li>Content 2</li>
          <li>Content 3</li>
        </ul>
      </template>
    </MFoldable>
  `,
})

export const FoldableExample = Template.bind({})
import MModal from './MModal.vue';
import { Meta, StoryFn } from '@storybook/vue3'
import MButton from '@/components/stories/molecules/MButton/MButton.vue';

export default {
  title: 'molecules/MModal',
  component: MModal,
} as Meta<typeof MModal>

const Template:StoryFn<typeof MModal> = (args) => ({
  components: { MModal, MButton },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MModal>
      <template #activator="{ on }">
        <MButton background-color="#19A29A" v-on="on">
          <h2 style="color: white">Click</h2>
        </MButton>
      </template>

      <div style="width:200px;">
        BABA
      </div>

    </MModal>
  `,
})

export const ModalExample = Template.bind({})
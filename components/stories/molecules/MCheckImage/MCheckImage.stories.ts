import MCheckImage from './MCheckImage.vue';
import { Meta, StoryFn } from '@storybook/vue3'


export default {
  title: 'molecules/MCheckImage',
  component: MCheckImage,
  argTypes: {
    'onUpdate:modelValue': {}
  }
} as Meta<typeof MCheckImage>

const Template:StoryFn<typeof MCheckImage> = (args) => ({
  components: { MCheckImage },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MCheckImage v-bind="args" />
  `,
})

export const CheckExample = Template.bind({})
CheckExample.args = {
  name: 'example1',
  image: 'https://deungi24.com/img/gift3_1.png',
  title: '절세에 유리한 정관 제작',
  cost: '220,000원',
  sale: true,
  saleCost: '0원'
}

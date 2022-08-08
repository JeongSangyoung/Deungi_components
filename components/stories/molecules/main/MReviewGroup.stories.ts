import MReviewGroup from './MReviewGroup.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MReviewGroup',
  component: MReviewGroup,
} as Meta<typeof MReviewGroup>

const Template:StoryFn<typeof MReviewGroup> = (args) => ({
  components: { MReviewGroup },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MReviewGroup v-bind="args" />
  `,
})

export const ReviewExample = Template.bind({})
ReviewExample.args = {
  image: 'https://deungi24.com/img/user_1.png',
  content: '대표이사인 제가 알아야 할 정보까지 쉽게 설명해주셔서 컨설팅 받은 느낌입니다.',
  author: '(주) 기술자숲 공태영 대표님'
}

const TemplateList:StoryFn<typeof MReviewGroup> = (args) => ({
  components: { MReviewGroup },
  setup() {
    return {
      args,
    }
  },
  template: `
    <div v-bind="args">
      <MReviewGroup 
        v-for="item in args.items" 
        :key="item.auth" 
        v-bind="item" 
      />
    </div>
  `,
})

export const ReviewList = TemplateList.bind({})
ReviewList.args = {
  items: [
    {
      image: 'https://deungi24.com/img/user_1.png',
      content: '대표이사인 제가 알아야 할 정보까지 쉽게 설명해주셔서 컨설팅 받은 느낌입니다.',
      author: '(주) 기술자숲 공태영 대표님'
    },
    {
      image: 'https://deungi24.com/img/user_2.png',
      content: '모르는게 있으면 그때그때 카톡으로 물어보고 답장 받을 수 잇어서 정멸 편했다.',
      author: '(주) 더줌 임경아 대표님'
    },
    {
      image: 'https://deungi24.com/img/user_3.png',
      content: '대표이사인 제가 알아야 할 정보까지 쉽게 설명해주셔서 컨설팅 받은 느낌입니다.',
      author: '인텔라이츠 조민국 대표님'
    },
  ]
}
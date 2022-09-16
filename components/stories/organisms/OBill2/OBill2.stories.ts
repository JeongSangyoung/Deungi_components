import OBill2 from './OBill2.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OBill',
  component: OBill2,
} as Meta<typeof OBill2>

const Template:StoryFn<typeof OBill2> = (args) => ({
  components: { OBill2 },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OBill2 v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      costName: '설립공과금',
      totalCost: '155,000',
      details: [
        {
          costName: '법인 설립 공과금',
          cost: '425,000',
          sale: false,
        },
        {
          costName: '과밀지역 외 설립 공과금 절약',
          cost: '270,000',
          sale: true,
        }
      ],
    },
    {
      costName: '수수료',
      totalCost: '979,000',
      details: [
        {
          costName: '서류등기 수수료',
          cost: '700,000',
          sale: false,
        },
        {
          costName: '등기24 8월 할인',
          cost: '321,000',
          sale: true,
        },
        {
          costName: '농어업법인 설립 추가 수수료',
          cost: '200,000',
          sale: false,
        },
        {
          costName: '미성년자 추가 수수료',
          cost: '200,000',
          sale: false,
        },
        {
          costName: '외국인 주주 추가 수수료',
          cost: '200,000',
          sale: false,
        },
      ],
    },
    {
      costName: 'VAT',
      totalCost: '97,900'
    },
    {
      costName: '합계',
      totalCost: '4,790,870',
      sale: {
        costName: '등기24 할인',
        cost: '2,569,650'
      }
    }
  ],
}
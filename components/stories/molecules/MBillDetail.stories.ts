import MBillDetail from './MBillDetail.vue';
import { Meta, StoryFn } from '@storybook/vue3'


export default {
  title: 'molecules/MBillDetail',
  component: MBillDetail,
} as Meta<typeof MBillDetail>

const Template:StoryFn<typeof MBillDetail> = (args) => ({
  components: { MBillDetail },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MBillDetail v-bind="args" />
  `,
})

export const BillExample = Template.bind({})
BillExample.args = {
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
  ]
}

export const NoDetails = Template.bind({})
NoDetails.args = {
  costName: 'VAT',
  totalCost: '37,900',
}

export const Sale = Template.bind({})
Sale.args = {
  costName: '합계',
  totalCost: '1,262,9000',
  sale: {
    costName: '등기24할인',
    cost: '691,100'
  }
}
<script setup lang="ts">
import MBillDetail from '@/components/stories/molecules/MBillDetail/MBillDetail.vue';

interface IBillItem {
  costName: string;
  totalCost: string;
  details?: IBillDetail[] | undefined;
  sale?: IBillDetail | undefined;
}

interface IBillDetail {
  costName: string;
  cost: string;
  sale?: boolean;
}

const items = [
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
] as IBillItem[]
</script>

<template>
<div class="bill">
  <div v-for="item in items" class="bDetail-one">
    <MBillDetail
      :key="item.costName"
      v-bind="item"
    />
  </div>

  <p class="bill-total">법인설립 총 비용 <b>2,221,220원</b></p>
</div>
</template>

<style lang="scss" scoped>
.bill {
  background: #F5F5F5;
  padding: 42px;

  @include xs {
    padding: 20px;
  }
}
.bDetail-one {
  padding: 20px;
  margin-bottom: 4px;
  background: #fff;

  @include xs {
    padding: 12px;
  }
}

.bill-total {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
  b {
    color: $color-basic;
  }
  letter-spacing: -1.2px;

  @include sm {
    font-size: 22px;
  }

  @include xs {
    font-size: 20px;
  }
}
</style>

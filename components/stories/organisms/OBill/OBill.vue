<script setup lang="ts">
import MBillDetail from '@/components/stories/molecules/MBillDetail/MBillDetail.vue';
import { IBill } from '@/types';

interface PropType {
  items: IBill[]
}

const props = withDefaults(defineProps<PropType>(), {}) 

</script>

<template>
<div class="bill">
  <div v-for="item in props.items" class="bDetail-one">
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
  margin-top: 32px;

  b {
    color: $color-basic;
  }
  letter-spacing: -1.2px;

  @include sm {
    font-size: 22px;
  }

  @include xs {
    font-size: 20px;
    margin-top: 20px;
  }
}
</style>

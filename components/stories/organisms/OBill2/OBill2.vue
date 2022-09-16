<script setup lang="ts">
import MBillDetail from '@/components/stories/molecules/MBillDetail/MBillDetail.vue';
import { IBill } from '@/types';

interface PropType {
  items: IBill[]
}

const props = withDefaults(defineProps<PropType>(), {}) 

</script>

<template>
<div class="bill2">
  <p class="title-type-3">
    <div>법인설립 총 비용</div>
    <div class="cost">2,567,200원</div>
  </p>

  <div v-for="item in props.items" class="bDetail-one">
    <MBillDetail
      :key="item.costName"
      v-bind="item"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.title-type-3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  .cost {
    color: $color-basic;
  }
}
</style>
  
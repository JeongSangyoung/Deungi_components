<script setup lang="ts">
import { ref, watchEffect } from 'vue';

import { IRegMethodItems } from '@/types';
import MRadioButtonGroup from '../../molecules/MRadioButtonGroup/MRadioButtonGroup.vue';

interface PropType {
  modelValue: number;
  items: IRegMethodItems[];
}

const props = withDefaults(defineProps<PropType>(), {});

const radio = ref<number>();
const payitems = [
  '일반 카드 결제 (다날 결제대행 방식)',
  '5초 간편 카드등록 (카드번호 입력방식)',
  '5초 실시간 계좌이체'
]

</script>

<template>
<div>
  <p class="title-type-3">
    결제 방법
  </p>

  <MRadioButtonGroup
    name="payby"
    :contents="payitems"
  />

</div>
</template>

<style lang="scss" scoped>
.title-type-3 {
  margin-bottom: 24px;
}
</style>
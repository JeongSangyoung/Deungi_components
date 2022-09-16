<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import MSelectServiceGroup from '@/components/stories/molecules/MSelectServiceGroup/MSelectServiceGroup.vue';
import MTooltip from '@/components/stories/molecules/MTooltip/MTooltip.vue';

import { IRegMethodItems } from '@/types';

interface PropType {
  modelValue: number;
  items: IRegMethodItems[];
}

const props = withDefaults(defineProps<PropType>(), {});

const radio = ref<number>();
watchEffect(() => {
  radio.value = props.modelValue
})

const emit = defineEmits(['update:modelValue']);
const changeValue = (idx) => {
  emit('update:modelValue', idx);
}

</script>

<template>
<div>
  <p class="title-type-1">설립 등기 방식을 선택하세요.</p>
  <p class="txt-20">- 대표님의 PC에 공동인증서를 깔 수 있다면, <b>전자등기</b>를 선택하세요.</p>
  <p class="txt-20">- 주주·임원 중 외국인이 있다면, <b>서류등기</b>만 가능해요</p>
  
  <MSelectServiceGroup
    id="selection"
    v-model="radio"
    :items="items"
    name="selectionCost"
    @update:modelValue="changeValue"
  />
  
  <div v-show="radio === 1" class="tooltip-cont">
    <MTooltip 
      name="등기24" 
      charge="등기24변호사" 
      image="https://deungi24.com/img/illu_3.png"
    >
      <p class="tooltip-title"><b>저렴하고 가장 빠른 전자등기</b> 방식을 추천해요</p>
      <p class="tooltip-content">공인(공동)인증서가 지금 없어도, 신청 후 5일 이내 만 발급하시면 됩니다.</p>
    </MTooltip>
  </div>
</div>
</template>

<style lang="scss" scoped>
.tooltip-title {
  b {
    color: $color-basic;
  }
}
.txt-20 {
  margin: 0 4px;
}
#selection {
  margin: 24px 0;

  @include smAndDown {
    margin: 24px auto;
  }
}

.tooltip-cont {
  display: flex;
  justify-content: center;
}

</style>
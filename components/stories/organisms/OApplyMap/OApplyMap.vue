<script setup lang="ts">
import { ref, watch } from 'vue';
import MMapArea from '@/components/stories/molecules/MMapArea/MMapArea.vue';
import MTooltip from '@/components/stories/molecules/MTooltip/MTooltip.vue';
import Dummy, { dummy } from '@/components/composable/useDummy';


import { ILocation } from '@/types';

interface PropType {
  location: ILocation
}
withDefaults(defineProps<PropType>(), {});
  // if (props.location.sido === '') sido.value = '전체';
  // else sido.value = props.location.sido;
  // if (props.location.sigungu === '') sigungu.value = '시/군/구';
  // else sigungu.value = props.location.sigungu;
  // if (props.location.third === '') third.value = '선택해주세요';
  // else third.value = props.location.third;
const location = ref<ILocation>({ sido: '', sigungu: '', third: ''})
Dummy<ILocation>('location').then(result => location.value = result)

const emit = defineEmits(['update:location', 'verify'])

const verify = (data) => {
  emit('verify', {
    crowded: data.value,
    verified: data.verified 
  })
}
const emitLocation = (location: ILocation) => {
  emit('update:location', location)
}


</script>

<template>
<div>
  {{ location }}
  <p class="title-type-1">사업은 어디서 시작하시나요?</p>
  <div class="apply-container">
    <MMapArea :location="location" @verified="verify" @update:location="emitLocation"/>
    <MTooltip class="tooltip" name="등기24" charge="등기24변호사">
      <p class="tooltip-title">
        "<b>수도권 외 지역</b>은 <b>동록 면허세 67%</b> 감면 됩니다"
      </p>
      <p class="tooltip-content">
        과밀억제구역으로 <b>지정되어 있지 않은 지역(남색)</b>을 선택하시면 등록면허세가 67% 절감 됩니다.
      </p>
    </MTooltip>
  </div>
</div>
</template>

<style lang="scss" scoped>
.apply-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
}
.tooltip {
  b {
    color: $color-basic;
  }
}
</style>
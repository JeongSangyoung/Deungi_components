<script setup lang="ts">
import { ref } from 'vue';
import MMapArea from '@/components/stories/molecules/MMapArea.vue';
import MTooltip from '@/components/stories/molecules/MTooltip.vue';

const disabled = ref(true);

const mapClicked = (obj) => {
  disabled.value = !obj.verified;
}

</script>

<template>
<p class="title-type-1">사업은 어디서 시작하시나요?</p>
<div class="apply-container">
  <MMapArea @click="mapClicked" />
  <MTooltip class="tooltip" name="등기24" charge="등기24변호사">
    <p class="tooltip-title">
      "<b>수도권 외 지역</b>은 <b>동록 면허세 67%</b> 감면 됩니다"
    </p>
    <p class="tooltip-content">
      과밀억제구역으로 <b>지정되어 있지 않은 지역(남색)</b>을 선택하시면 등록면허세가 67% 절감 됩니다.
    </p>
  </MTooltip>
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
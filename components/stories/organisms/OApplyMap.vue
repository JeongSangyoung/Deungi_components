<script setup lang="ts">
import { ref, watch } from 'vue';
import MMapArea from '@/components/stories/molecules/MMapArea.vue';
import MTooltip from '@/components/stories/molecules/MTooltip.vue';

import { ILocation } from '@/types';

interface PropType {
  state: {
    location: ILocation
  }
}
const props = withDefaults(defineProps<PropType>(), {});

const location = ref<ILocation>();
const verified = ref<boolean>(false);
const croweded = ref<boolean>();
location.value = props.state.location;

const emit = defineEmits(['select'])

const mapClicked = () => {
  emit('select', { location: location.value, verified: verified.value })
}

const verify = (obj) => {
  verified.value = obj.verified;
  croweded.value = obj.croweded;
}

</script>

<template>
<div>
  {{ location }} {{ croweded }} {{ verified }}
  <p class="title-type-1">사업은 어디서 시작하시나요?</p>
  <div class="apply-container">
    <MMapArea v-model="location" @change="mapClicked" @verified="verify" />
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
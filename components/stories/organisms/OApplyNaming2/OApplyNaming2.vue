<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import MRadioButtonGroup from '@/components/stories/molecules/MRadioButtonGroup/MRadioButtonGroup.vue';
import MTooltip from '@/components/stories/molecules/MTooltip/MTooltip.vue';

interface PropType {
  modelValue: number;
  corpName: string;
}

const props = withDefaults(defineProps<PropType>(), {});

const radio = ref<number>();
const corpName = ref<string>();
const corpnaming = ref<string[]>([]);
watchEffect(() => {
  corpName.value = props.corpName;
  corpnaming.value = [`주식회사 ${props.corpName}`, `${props.corpName} 주식회사`];
  radio.value = props.modelValue;
})

const emit = defineEmits(['verify', 'update:modelValue'])
const changeValue = (idx) => {
  emit('update:modelValue', idx)
  emit('verify', { verified: idx !== -1 })
}

</script>

<template>
<p class="title-type-1">"주식회사"는 어디로 붙일까요?</p>
<MRadioButtonGroup
  v-model="radio"
  class="mGroup"
  name="naming1"
  :contents="corpnaming"
  @update:modelValue="changeValue"
/>
<MTooltip 
  v-if="radio === 0" 
  class="tooltip" 
  name="등기24" 
  charge="등기24변호사"
  image="https://deungi24.com/img/illu_5.png"
>
  <p class="tooltip-title">TIP. <b>{{ corpnaming[radio] }}</b>는 <b>은행 거래 시,</b> 법인명 <b>확인</b>이 <b>어려울 수</b> 있어요</p>
  <div>
    <img src="https://deungi24.com/img/img_1.png" />
  </div>
</MTooltip>
</template>

<style lang="scss" scoped>
.mGroup {
  margin-bottom: 24px;
  margin-top: 24px;
}

.tooltip {
  justify-content: center;
  padding: 0 12px;
  b {
    color: $color-basic;
  }
  div {
    text-align: center;
    margin-top: 12px;
  }
}

img {
  max-width: 100%;
  max-height: 100%;
}

</style>
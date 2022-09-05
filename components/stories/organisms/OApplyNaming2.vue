<script setup lang="ts">
import { ref } from 'vue';
import MRadioButtonGroup from '../molecules/MRadioButtonGroup.vue';
import MTooltip from '../molecules/MTooltip.vue';

interface PropType {
  state: {
    radio: number;
  }
  propsData: {
    corpname: string;
  }
}

const props = withDefaults(defineProps<PropType>(), {});

const corpnaming = [`주식회사 ${props.propsData.corpname}`, `${props.propsData.corpname} 주식회사`];
const radio = ref<number>();
radio.value = props.state.radio;

const emit = defineEmits(['select'])
const changeValue = () => {
  emit('select', { radio: radio.value, verified: radio.value !== -1 })
}

</script>

<template>
<p class="title-type-1">"주식회사"는 어디로 붙일까요?</p>
<MRadioButtonGroup
  class="mGroup"
  name="naming1"
  v-model="radio"
  :contents="corpnaming"
  @change="changeValue"
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
<script setup lang="ts">
import { ref } from 'vue';
import MRadioButtonGroup from '../molecules/MRadioButtonGroup.vue';
import MTooltip from '../molecules/MTooltip.vue';
import MButton from '../molecules/MButton.vue';

interface PropType {
  corpname: string;
}

const props = withDefaults(defineProps<PropType>(), {})

const corpnaming = [`주식회사 ${props.corpname}`, `${props.corpname} 주식회사`];

const selected = ref(0)

const selectedIndex = (v: number) => {
  selected.value = v;
}
</script>

<template>
<p class="title-type-1">"주식회사"는 어디로 붙일까요?</p>
<MRadioButtonGroup
  class="mGroup"
  name="naming1"
  :contents="corpnaming"
  :default-index="0"
  @select="selectedIndex"
/>
<MTooltip 
  v-if="selected === 0" 
  class="tooltip" 
  name="등기24" 
  charge="등기24변호사"
  image="https://deungi24.com/img/illu_5.png"
>
  <p class="tooltip-title">TIP. <b>{{ corpnaming[selected] }}</b>는 <b>은행 거래 시,</b> 법인명 <b>확인</b>이 <b>어려울 수</b> 있어요</p>
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
<script setup lang="ts">
import MCostSelectGroup from '../molecules/main/MCostSelectGroup.vue';
import { ref } from 'vue';
import MTooltip from '../molecules/MTooltip.vue';

const costSelected = ref(0);
const items = [
  {
    duration: '5일',
    advantage: '방문없이 빠르고 편리한',
    method: '전자 등기',
    image: {
      checked: 'https://deungi24.com/img/ico_list9_on.png',
      unchecked: 'https://deungi24.com/img/ico_list9.png'
    },
    cost: '179,000'
  },
  {
    duration: '9일',
    advantage: '서류를 등기로 보내 주세요',
    method: '서류 등기',
    image: {
      checked: 'https://deungi24.com/img/ico_list10_on.png',
      unchecked: 'https://deungi24.com/img/ico_list10.png'
    },
    cost: '379,000'
  },
]
</script>

<template>
<p class="title-type-1">설립 등기 방식을 선택하세요.</p>
<p class="txt-20">- 대표님의 PC에 공동인증서를 깔 수 있다면, <b>전자등기</b>를 선택하세요.</p>
<p class="txt-20">- 주주·임원 중 외국인이 있다면, <b>서류등기</b>만 가능해요</p>

<MCostSelectGroup
  :items="items"
  :default-index="0"
  name="selectionCost"
  v-model="costSelected"
  id="selection"
/>

<div v-show="costSelected === 1">
  <MTooltip name="등기24" charge="등기24변호사" image="https://deungi24.com/img/illu_3.png">
    <p class="tooltip-title"><b>저렴하고 가장 빠른 전자등기</b> 방식을 추천해요</p>
    <p class="tooltip-content">공인(공동)인증서가 지금 없어도, 신청 후 5일 이내 만 발급하시면 됩니다.</p>
  </MTooltip>
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

</style>
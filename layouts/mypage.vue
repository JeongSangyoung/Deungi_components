<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import OMainFooter from '@/components/stories/organisms/OMainFooter/OMainFooter.vue';


const stepItems = [
  { 
    name: '법인유형 선택',
    path: '/apply/selectType'
  },
  { 
    name: '법인명 조회',
    path: '/apply/searchName'
  },
  { 
    name: '주식정보 입력',
    path: '/apply/enterStock'
  },
  { 
    name: '서비스 선택',
    path: '/apply/selectService'
  },
]

const route = useRoute()

</script>

<template>
<div>
  <div id="nav">
    <img src="https://deungi24.com/img/logo.png" />
  </div>
  <div id="content">
    <slot></slot>
    <slot name="loading"></slot>
  </div>
  <OMainFooter id="footer" />
</div>
</template>

<style lang="scss" scoped>
#nav {
  background: #2B324E;
  height: 60px;
}

#step {
  max-width: 1264px;

  margin: 48px auto;
  // margin-bottom: 
}

#content {
  min-height: calc(100vh - 60px);
  max-width: 1264px;


  margin: 0 auto;
  padding: 0 24px;
  // padding-bottom: 48px;

  @include smAndDown {
    padding: 0 12px;
  }

  @include tiny {
    padding: 0 4px;
  }
}
</style>
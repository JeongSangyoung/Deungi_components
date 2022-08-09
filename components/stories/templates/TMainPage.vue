<script setup lang="ts">
import OMainHeader from '@/components/stories/organisms/OMainHeader.vue';
import MMainTab from '@/components/stories/molecules/MMainTab.vue';

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const items = ref([]);

watch(
  () => route.path,
  async path => {
    if (path === '/review') {
      items.value = [
        {
          image: 'https://deungi24.com/img/user_1.png',
          content: '대표이사인 제가 알아야 할 정보까지 쉽게 설명해주셔서 컨설팅 받은 느낌입니다.',
          author: '(주) 기술자숲 공태영 대표님'
        },
        {
          image: 'https://deungi24.com/img/user_2.png',
          content: '모르는게 있으면 그때그때 카톡으로 물어보고 답장 받을 수 잇어서 정멸 편했다.',
          author: '(주) 더줌 임경아 대표님'
        },
        {
          image: 'https://deungi24.com/img/user_3.png',
          content: '대표이사인 제가 알아야 할 정보까지 쉽게 설명해주셔서 컨설팅 받은 느낌입니다.',
          author: '인텔라이츠 조민국 대표님'
        },
      ]
    } else if (route.path === '/') {
      items.value =  [
        {
          header: '누적 이용자 수',
          contentColor: '#3952B3',
          contentCount: '66',
          contentUnit: '만명',
          description: '2022년 8월 기준',
          image: 'https://deungi24.com/img/prolist01.svg',
        },
        {
          header: '방문없이 즉시 설립',
          contentCount: '66',
          contentUnit: '만명',
          description: '2022년 8월 기준',
          image: 'https://deungi24.com/img/prolist02.svg',
        },
        {
          header: '8월 기준 국내 최저가',
          contentCount: '179,000',
          contentUnit: '원',
          description: '오프라인 법무사 대비 50%절감',
          image: 'https://deungi24.com/img/prolist03.svg',
        },
      ]
    }
  }
)

const tabItems = [
  {
    path: '/',
    name: '등기24 법인설립',
  },
  {
    path: '/cost',
    name: '비용안내',
  },
  {
    path: '/event',
    name: '등기24 단독혜택',
  },
  {
    path: '/review',
    name: '이용 후기',
  },
]

</script>

<template>
<div id="mainPage">
  <OMainHeader id="header"/>
  <div id="content">
    <MMainTab id="tab" :items="tabItems" />
    <router-view :items="items" />  
  </div>
</div>

</template>

<style lang="scss" scoped>
#mainPage {
  display: flex;
  width: 100%;

  @include smAndDown {
    flex-direction: column;
  }
}
#header {
  @include smAndUp {
    width: 32%;
  }
  @include smAndDown {
    width: 100%;
  }
}
#content {
 @include smAndUp {
    width: 68%;
  }
  @include smAndDown {
    width: 100%;
  }
  @include xl {
    width: calc(100% - 640px);
  }
}
</style>
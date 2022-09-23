<script setup lang="ts">
import { ref } from 'vue';
import MButtonGroup from '../../molecules/MButtonGroup/MButtonGroup.vue';
import ODateRange from '../ODateRange/ODateRange.vue';
import MInput from '../../molecules/MInput/MInput.vue';
import MButton from '../../molecules/MButton/MButton.vue';

const btnItems = [
  {
    text: '전체',
    background: '#6C757D',
    number: 0,
  },
  {
    text: '담당자 배정대기',
    background: 'tomato',
    number: 0,
  },
  {
    text: '정보입력 대기중',
    background: '#FFC800',
    number: 60,
  },
  {
    text: '등기매니저 확인중',
    background: '#079D05',
    number: 16,
  },
  {
    text: '추가결제 대기중',
    background: '#523FF1',
    number: 1,
  },
  {
    text: '최종컨펌 대기중',
    background: '#523FF1',
    number: 2,
  },
  {
    text: '등기 준비중',
    background: '#FF4BD8',
    number: 26,
  },
  {
    text: '등기 완료',
    background: '#121212',
    number: 1189,
  },
  {
    text: '환불 완료',
    background: '#858585',
    number: 146,
  },
]

const corpName = ref<string>('');

</script>

<template>
<div>
  <MButtonGroup
    :items="btnItems"
    class="btngroup"
  />
  <div class="search">
    <ODateRange class="search-date" />
    <MInput class="search-input" v-model="corpName" width="250px" place-holder="법인명" />
    <MButton class="search-btn"> 검색</MButton>
    <MButton class="search-excel" background-color="grey">엑셀다운로드</MButton>
  </div>

  <div class="orderTable">
    
  </div>
</div>

</template>

<style lang="scss" scoped>
.btngroup {
  margin-bottom: 16px;
}
.search {
  display: flex;

  @include smAndDown {
    flex-direction: column;
  }

  &-date {
    margin-right: 20px;

    @include smAndDown {
      margin-bottom: 16px;
    }
  }

  &-input {
    @include smAndDown {
      margin-bottom: 16px;
    }
  }

  &-btn {
    font-size: 20px;
    width: 100px;

    @include smAndDown {
      margin-bottom: 16px;
      font-size: 16px;
      width: 250px;
      height: 52px;
    }
  }

  &-excel {
    font-size: 20px;

    @include mdAndUp {
      height: 62px;
      position: absolute;
      right: 0;
    }
    
    @include smAndDown {
      font-size: 16px;
      height: 52px;
      width: 250px;
    }
  }


}

</style>
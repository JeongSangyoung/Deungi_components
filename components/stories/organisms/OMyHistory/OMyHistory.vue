<script setup lang="ts">
import Mypage from '@/layouts/mypage.vue';
import MButton from '../../molecules/MButton/MButton.vue';


const history = [
  {
    state: '취소',
    date: '2022.08.24',
    pay: '신용카드',
    corpname: '주식회사 마크24',
    cost: '571,900원',
    url: 'abc'
  },
  {
    state: '취소',
    date: '2022.08.24',
    pay: '신용카드',
    corpname: '주식회사 등기인포',
    cost: '351,900원',
    url: 'abc'
  },
  {
    state: '취소',
    date: '2022.08.24',
    pay: '계좌이체',
    corpname: '등기라이츠 주식회사',
    cost: '368,400원',
    url: ''
  },
]

</script>

<template>
<div>
  <p class="title-type-1">
    <span>결제/환불</span> 내역
  </p>

  <ul>
    <li v-for="(item, idx) in history" :key="idx" class="history-list">
      <div class="history-state">
        <span class="mark mark-red">{{ item.state }}</span>
      </div>
      <div class="history-content">
        <b>{{ item.date }}</b> &nbsp;&nbsp;|&nbsp;
        결제방법: {{ item.pay }}<br />
        <span class="history-corpname">{{ item.corpname }}</span><br />
        <span>법인등록 전자등기 <a>상세보기></a></span>
      </div>
      <div class="history-cost">
        {{ item.cost }}
      </div>
      <div class="history-check">
        <div v-if="item.url">
          <MButton class="history-btn">전표 확인</MButton>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
  span {
    color: $color-basic;
  }
}

$width-state: 160px;
$width-cost: 160px;
$width-check: 160px;
$width-md-state: 120px;
$width-md-cost: 120px;
$width-md-check: 145px;
.history-list {
  display: flex;
  letter-spacing: -1px;
  margin-bottom: 12px;
  
  @include xs {
    flex-direction: column;
    margin-bottom: 24px;
  }

  .history-state, .history-cost, .history-check {
    display: flex;
    align-items: center;
    justify-content: center;
    @include xs {
      justify-content: flex-start;
    }
  }
  .history-state, .history-cost, .history-check, .history-content {
    padding: 12px;
    @include xs {
      width: 100% !important;
    }
  }
  .history-state {
    width: $width-state;
    @include mdAndDown {
      width: $width-md-state;
    }

  }
  .history-content {
    width: calc(100% - ($width-state + $width-cost + $width-check));
    padding: 12px;
    @include mdAndDown {
      width: calc(100% - ($width-md-state + $width-md-cost + $width-md-check));
    }
    @include xs {
      padding-top: 0;
      padding-bottom: 0;
    }

    .history-corpname {
      font-size: 26px;
      font-weight: 300;

      @include smAndDown {
        font-size: 22px;
      }
    }
  }
  .history-cost {
    width: $width-cost;
    font-size: 20px;
    font-weight: 300;
    @include smAndDown {
      width: $width-md-cost;
    }
    @include xs {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  .history-check {
    width: $width-check;
    @include smAndDown {
      width: $width-md-check;
    }

    .history-btn {
      padding: 16px;
      font-size: 20px;

      @include smAndDown {
        font-size: 16px;
      }
    }
  }
}

.mark {
  position: relative;
  padding-left: 8px;
  font-size: 20px;
  font-weight: 200;
  &:before {
    content: '';
    position: absolute;
    clear: both;
    display: block;
    top: 6px;
    width: 3px;
    height: 16px;
    left: 0;
  }

  &-red {
    &:before {
      background: red;
    }
  }
}
</style>
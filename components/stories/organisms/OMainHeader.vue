<script setup lang="ts">
import MButton from '@/components/stories/molecules/MButton.vue';

</script>

<template>
<div class="header">
  <div class="header-top">
    <img src="https://deungi24.com/img/logo_pc.png" />
    <mButton :rounded="true" background-color="#808080">
      <div>로그인</div>
    </mButton>
  </div>

  <div class="header-inner">

    <div>
      <p class="header-txt_1">
        빠르고 쉽게<br class="none-smAndDown" />
        법인 설립<br />
        <span style="color: #3952B3">등기 24</span>
      </p>
  
      <p class="header-txt_2">
        법인설립에 비용과 시간 낭비하지 마세요. <br />
        <b>65% 저렴한 비용으로 ,딱 5일만에</b><br />
        변호사가 안전하게 완료해 드립니다.
      </p>
    </div>

    <div class="header-button">
      <MButton :pulse="true">
        <div>실시간 견적 조회하기</div>
      </MButton>
      <p>오늘만 벌써 <b>111명</b>이 <b>법인설립 신청 완료!</b></p>
    </div>

  </div>

</div>
</template>

<style lang="scss" scoped>
.header {
  max-width: 640px;
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @include smAndUp {
    min-width: 400px;
  }

  @include smAndDown {
    padding: 24px 16px;
    max-width: unset;
    min-width: unset;
  }
}

.header {
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      color: white; 
      padding: 0 12px; 
      font-size:15px;
    }
  }

  &-inner {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-txt_1 {
    font-family: 'GmarketSans';
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -3px;
  }

  &-txt_2 {
    margin-top: 28px;
    font-size: 20px;
    letter-spacing: -2px;
  }

  &-button {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      color: white;
      font-size: 20px;
      padding: 12px 32px;

      @include smAndDown {
        padding: 12px 110px;
      }

      @include xs {
        padding: 12px 52px;
      }

    }
    p {
      font-size: 16px;
      margin-top: 12px;
      text-align: center;

      b {
        color: red;
      }
    }
  }
}
</style>
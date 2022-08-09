<script setup lang="ts">
import MMainEventCard from '@/components/stories/molecules/main/MMainEventCard.vue';

</script>

<template>
<div class="main">
  <div class="main-wrap">
    <div class="main-title">

    </div>

    <div class="main-cards">
      <MMainEventCard>
        <template #header>
          <p class="mEvent-txt_3">혜택 <b>1</b></p>
        </template>
        <template #content>
          <div class="mEvent-wrap">
            <p class="mEvent-txt_1">
              <b style="color: #3952b3">절세에 유리한 정관</b>
              <span style="font-weight: 500;"><span class="linethrough">220,000원</span> 무료</span>
            </p>
      
            <img src="https://deungi24.com/img/img_benefit_3.png" />
      
            <p class="mEvent-txt_2">
              20만원 상당의 최신 정관<br />
              <span style="color: orange">세무 변호사</span>가 맞춤 제작
            </p>
          </div>
        </template>
      </MMainEventCard>

      <MMainEventCard>
        <template #header>
          <p class="mEvent-txt_3">혜택 <b>2</b></p>
        </template>
        <template #content>
          <div class="mEvent-wrap">
            <p class="mEvent-txt_1">
              <b style="color: #3952b3">절세에 유리한 정관</b>
              <span style="font-weight: 500;"><span class="linethrough">220,000원</span> 무료</span>
            </p>
      
            <img src="https://deungi24.com/img/img_benefit_3.png" />
      
            <p class="mEvent-txt_2">
              20만원 상당의 최신 정관<br />
              <span style="color: orange">세무 변호사</span>가 맞춤 제작
            </p>
          </div>
        </template>
      </MMainEventCard>

      <MMainEventCard>
        <template #header>
          <p class="mEvent-txt_3">혜택 <b>3</b></p>
        </template>
        <template #content>
          <div class="mEvent-wrap">
            <p class="mEvent-txt_1">
              <b style="color: #3952b3">절세에 유리한 정관</b>
              <span style="font-weight: 500;"><span class="linethrough">220,000원</span> 무료</span>
            </p>
      
            <img src="https://deungi24.com/img/img_benefit_3.png" />
      
            <p class="mEvent-txt_2">
              20만원 상당의 최신 정관<br />
              <span style="color: orange">세무 변호사</span>가 맞춤 제작
            </p>
          </div>
        </template>
      </MMainEventCard>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
.main {
  background: url('https://deungi24.com/img/main_slider_3.gif') no-repeat center 0px;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);

  @include mdAndUp {
    padding: 0 40px;
  }

  @include smAndDown {
    padding: 60px 12px;
  }
}

.main-cards {
  display: flex;
}

.mEvent-wrap {
  text-align: center;
  font-family: 'GmarketSans';

  img {
    margin: 24px 0;
  }
}
.mEvent-txt_1 {
  margin-top: 36px;
  font-size: 26px;
  letter-spacing: -1.2px;
}

.mEvent-txt_2 {
  margin-bottom: 32px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.8px;
}

.mEvent-txt_3 {
  font-family: 'GmarketSans';
  font-size: 16px;
  font-weight: normal;
}


.linethrough {
  text-decoration: line-through;
}
</style>
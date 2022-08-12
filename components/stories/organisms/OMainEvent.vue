<script setup lang="ts">
import MMainEventCard from '@/components/stories/molecules/main/MMainEventCard.vue';

</script>

<template>
<div class="main">
  <div class="main-wrap">

    <div class="main-cards">
      <MMainEventCard>
        <template #header>
          <p class="mEvent-txt_3">혜택 <b>1</b></p>
        </template>
        <template #content>
          <div class="mEvent-wrap">
            <div>
              <p class="mEvent-txt_1">
                <b>
                  <span style="color: #3952b3">절세에 유리한 정관</span><br/>
                  <span style="font-weight: 500;"><span class="linethrough">220,000원</span> 무료</span>
                </b>
              </p>
        
              <img class="mEvent-img_1" src="https://deungi24.com/img/img_benefit_3.png" />
        
              <p class="mEvent-txt_2">
                20만원 상당의 최신 정관<br />
                <span style="color: orange">세무 변호사</span>가 맞춤 제작
              </p>
            </div>
            <img class="mEvent-img_2" src="https://deungi24.com/img/img_benefit_3.png" />
          </div>
        </template>
      </MMainEventCard>

      <MMainEventCard>
        <template #header>
          <p class="mEvent-txt_3">혜택 <b>2</b></p>
        </template>
        <template #content>
          <div class="mEvent-wrap">
            <div>
              <p class="mEvent-txt_1">
                <b>
                  <span style="color: #3952b3">가죽 인감 도장</span><br />
                  <span style="font-weight: 500;"><span class="linethrough">55,000원</span> 무료</span>
                </b>
              </p>
        
              <img class="mEvent-img_1" src="https://deungi24.com/img/img_benefit_2.png" />
        
              <p class="mEvent-txt_2">
                흔한 인감 도장 말고<br />
                <span style="color: orange">사업 기운 좋아지는 고급</span>도장 증정
              </p>
            </div>
            <img class="mEvent-img_2" src="https://deungi24.com/img/img_benefit_2.png" />
          </div>
        </template>
      </MMainEventCard>

      <MMainEventCard>
        <template #header>
          <p class="mEvent-txt_3">혜택 <b>3</b></p>
        </template>
        <template #content>
          <div class="mEvent-wrap">
            <div>
              <p class="mEvent-txt_1">
                <b >
                  <span style="color: #3952b3">법인 양식 키트</span><br />
                  <span style="font-weight: 500;"><span class="linethrough">33,000원</span> 무료</span>
                </b>
              </p>
        
              <img class="mEvent-img_1" src="https://deungi24.com/img/img_benefit_1.png" />
        
              <p class="mEvent-txt_2">
                등기부등본 2부, 인감증명서 2부<br />
                정관, <span style="color: orange">프리미엄 바인더</span>에 넣어서 증정
              </p>
            </div>
            <img class="mEvent-img_2" src="https://deungi24.com/img/img_benefit_1.png" />
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
  min-height: calc(100vh - 70px);

  @include mdAndUp {
    padding: 0 40px;
  }

  @include mdAndDown {
    padding: 60px 12px;
  }
}

.main-cards {
  display: flex;

  @include mdAndDown {
    flex-direction: column;
  }

  .mEvent {
    margin-right: 28px;
    &:last-child {
      margin-right: unset;
    }

    @include mdAndDown {
      margin-right: unset;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: unset;
      }
    }
  }
}

.mEvent-wrap {
  text-align: center;
  font-family: 'GmarketSans';

  img {
    margin: 24px 0;

    @include mdAndDown {
      max-width: 135px;
      max-height: 135px;
      margin-left: 24px;
    }

    @include tiny {
      max-width: 100px;
      max-height: 100px;
      margin-left: 12px;
    }
  }

  @include mdAndDown {
    display: flex;
    justify-content: space-between;
  }
  @include tiny {
    text-align: unset;
  }
}
.mEvent-txt_1 {
  margin-top: 36px;
  font-size: 26px;
  letter-spacing: -1.6px;

  @include mdAndDown {
    margin-top: 24px;
  }

  @include xs {
    font-size: 20px;
  }
}

.mEvent-txt_2 {
  margin-bottom: 32px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.8px;

  @include mdAndDown {
    margin-top: 12px;
    margin-bottom: unset;
  }
  @include xs {
    font-size: 14px;
  }
}

.mEvent-txt_3 {
  font-family: 'GmarketSans';
  font-size: 16px;
  font-weight: normal;
}

.mEvent-img_1 {
  @include mdAndDown {
    display: none
  }
}
.mEvent-img_2 {
  @include lgAndUp {
    display: none
  }
}


.linethrough {
  text-decoration: line-through;
}
</style>
<script setup lang="ts">

</script>

<template>
<div id="main">
  <div class="main-wrap">
    <p class="main-title">법인설립 시 <b class="black">등기24 모르면</b> 최소 <b class="red underline">59만원 손해</b></p>

    <ul class="main-ul">
      <li>
        <img src="https://deungi24.com/img/ico_price.png" />
        <div class="main-content">
          <div class="main-li"><b class="yellow">65% 저렴한</b> 설립 수수료</div>
          <div class="main-desc">일반 서류등기 <b>550,000원</b> -> <b class="black underline">179,000원</b> (등기24 전자등기)</div>
        </div>
      </li>

      <li>
        <img src="https://deungi24.com/img/ico_price.png" />
        <div class="main-content">
          <div class="main-li">공과금 감면 <b class="yellow">혜택 27만원</b></div>
          <div class="main-desc">평균 27만원, 대표님의 <b>모든 공과금 감면 혜택</b> 챙겨 드립니다.</div>
        </div>
      </li>

      <li>
        <img src="https://deungi24.com/img/ico_price.png" />
        <div class="main-content">
          <div class="main-li"><span class="linethrough">월 30만원</span> <b class="yellow">세무 약정 없음</b></div>
          <div class="main-desc">설립 무료 대행 후 <b class="black underline">세무사 1년 이용약정</b>이 있는 업체주의</div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<style lang="scss" scoped>
#main {
  background: url('https://deungi24.com/img/main_slider_2.gif') no-repeat center 0px;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: calc(100vh - 70px);
  font-family: 'GmarketSans';


  @include mdAndUp {
    padding: 0 40px;
  }

  @include smAndDown {
    padding: 60px 12px;
  }
}

.main-title {
  font-family: "NotoSans";
  font-size: 42px;
  color: #fff;
  letter-spacing: -2px;
  text-align: center;
  word-break: keep-all;
  font-weight: bold;
  padding: 0 12px;
  margin-bottom: 48px;

  @include md {
    font-size: 32px;
  }
  @include smAndDown {
    font-size: 24px;
  }
  @include mdAndDown {
    margin-bottom: 48px;
  }
}

.main-ul {
  li {
    margin-bottom: 36px;
    display: flex;
    align-items: center;
  }
}
.main-content {
  // display: inline-block;
  padding-left: 24px;
  
  .main-li {
    font-weight: 500;
    font-size: 36px;
    color: white;
  }

  .main-desc {
    font-size: 20px;
    letter-spacing: -1.2px;
    color: white;
  }
}

b {
  &.black {
    background: #000000;
  }

  &.blue {
    background: #3952B3;
  }

  &.red {
    background: rgb(255, 0, 0);
  }

  &.yellow {
    background: #FFEB3B;
    color: black;
  }
}

.linethrough {
  text-decoration: line-through;
}
.underline {
  text-decoration: underline;
  text-underline-position: under;
}
</style>
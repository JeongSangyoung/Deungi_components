<script setup lang="ts">
import MButton from '../molecules/MButton.vue';

</script>

<template>
<div class="footer-wrap">
  <div class="footer-corp">
    <img class="footer-head" src="https://deungi24.com/img/logo_pc.png" />
    <address class="footer-content">
      상호 : 피엔케이 법률사무소 ㅣ 대표자명 : 박지환 변호사 ㅣ 개인정보책임 : 박지환 <br />
      사업자등록번호 : 6550400545 ㅣ 이메일 : deungi24@naver.com <br />
      주소 : 경상남도 창원시 성산구 용지로169번길 15, 레이크펄스빌딩 10층, P&K법률사무소
    </address>
  </div>

  <div class="footer-faq">
    <p class="footer-head">FAQ</p>
    <div class="footer-content">
      <p style="margin-bottom: 12px;">
        법인 설립부터 운영 중 대표님이 주의하셔야 할 사항까지 <br />
        등기24 공식블로그에서 모두 해결할 수 있습니다.
      </p>
      <div class="footer-btngroup">
        <MButton background-color="#535B7A" style="margin-right: 12px; margin-bottom: 4px;"><b>등기24 공식블로그 바로가기 ></b></MButton>
        <MButton background-color="#535B7A"><b>법인설립 TIP 바로가기 ></b></MButton>
      </div>
    </div>

  </div>

  <div class="footer-sc">
    <div>
      <p>고객센터</p>
      <p>1833-2803</p>
      <p>AM 10:00 ~ PM 5:00</p>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.footer-wrap {
  width: 100%;
  background: #2B324D;
  padding: 32px 64px;
  display: flex;
  justify-content: space-around;

  @include smAndDown {
    flex-direction: column;
  }
  
  address, .footer-content {
    font-size: 18px;
    font-family: 'NotoSans';
    font-weight: 100;
    color: #fff;
    letter-spacing: -0.7px;
    text-align: left;
    font-style: normal;

    @include mdAndDown{
      font-size: 16px;
    }
  }

  .footer-head {
    margin-bottom: 12px;
    font-family: 'GmarketSans';
    color: #535b7a;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1px;
  }


  .footer-faq {
    margin: 0 24px;

    @include smAndDown {
      margin: 28px 0;
    }
    .footer-btngroup {
      b {
        font-family: 'NotoSans';
        font-weight: bold;
        font-size: 16px;
        color: white;

        @include mdAndDown{
          font-size: 14px;
        }
      }
    }
  }

  .footer-sc {
    div {
      width: 300px;
      background: #3B4261;
      padding: 24px;

      p {
        &:nth-of-type(1) {
          font-family: 'GmarketSans';
          color: #787f9b;
          font-weight: bold;
          font-size: 24px;
          margin-bottom: 12px;

          @include mdAndDown {
            
          }
        }
        &:nth-of-type(2) {
          font-family: 'GmarketSans';
          color: #fff;
          font-weight: bold;
          font-size: 40px;
          margin-bottom: 12px;

          @include mdAndDown {
            font-size: 26px;
          }
        }
        &:nth-of-type(3) {
          font-family: 'NotoSans';
          color: #fff;
          font-weight: bold;
          font-size: 18px;

          @include mdAndDown {
            font-size: 16px;
          }
        }
      }

      @include mdAndDown{
        width: 230px;
        padding: 20px;
      }


    }
  }
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
import MInput from '../../molecules/MInput/MInput.vue';
import MButton from '../../molecules/MButton/MButton.vue';

interface PropType {
  name: string;
  charge: string;
  reg: string;
  sharing: number;
  addr1: string;
  addr2: string;
  tel: string;
}

const props = withDefaults(defineProps<PropType>(), {});

const share = ref<number>();
const shareStock = ref<number>();
const reg1 = ref<number>();
const reg2 = ref<number>();
const tel1 = ref<number>();
const tel2 = ref<number>();
const tel3 = ref<number>();
const addr1 = ref<string>();
const addr2 = ref<string>();

</script>

<template>
<div class="myExeCard">
  <div class="myExeCard-profile">
    <img src="" />
  </div>
  <div class="myExeCard-content">
    <div class="myExeCard-name">
      <p>정상영 <span>이사</span></p>
    </div>
    <div class="myExeCard-detail">
      <ul>
        <li>
          <div class="myExeCard-title">지분율</div>
          <div class="myExeCard-stock">
            <MInput v-model="share" width="75px" maxlength="3" /> 
            <span>%</span>
            <span class="myExeCard-title">주식수</span>
            <MInput v-model="shareStock" width="180px" type="number" locale/>
          </div>
        </li>
        <li>
          <div class="myExeCard-title">주소</div>
          <div class="myExeCard-addr" >
            <MInput v-model="addr1" place-holder="등본상 주소 입력" width="400px" />
            <MInput v-model="addr2" place-holder="나머지 주소" width="500px" />
            <MButton class="myExeCard-btn">주소 검색</MButton>
          </div>
        </li>
        <li>
          <div class="myExeCard-title">주민등록번호</div>
          <div class="myExeCard-reg">
            <MInput v-model="reg1" place-holder="앞자리 6개" width="140px" type="number" maxlength="6" /> <span>-</span>
            <MInput v-model="reg2" place-holder="뒷자리 7개" width="140px" type="number" maxlength="6"/>
          </div>
        </li>
        <li>
          <div class="myExeCard-title">연락처</div>
          <div class="myExeCard-tel">
            <MInput v-model="tel1" width="85px" type="number" maxlength="4" /> <span>-</span>
            <MInput v-model="tel2" width="85px" type="number" maxlength="4" /> <span>-</span>
            <MInput v-model="tel3" width="85px" type="number" maxlength="4" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.myExeCard {
  background: #EDF0FF;
  &-profile {

  }

  &-content {

    .myExeCard-name {
      p {
        font-size: 24px;
        font-weight: bold;

        span {
          font-size: 20px;
          font-weight: normal,
        }
      }
    }
    .myExeCard-detail {
      
      ul li {
        list-style: circle;
        display: flex;

        .myExeCard-title {
          width: 150px;
          font-weight: bold;
          display: flex;
          align-items: center;
        }
      }

      .myExeCard-stock {
        
      }

      .myExeCard-reg, .myExeCard-tel, .myExeCard-addr {
        display: flex;
        span {
          display: flex;
          align-items: center;
          margin: 0 4px;
          font-size: 18px;
        }
      }

      .myExeCard-btn {
        font-size: 18px;
      }
    }
  }
}
</style>
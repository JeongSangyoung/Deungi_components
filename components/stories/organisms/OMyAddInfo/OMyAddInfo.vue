<script setup lang="ts">
import { ref, computed, watchEffect, watch } from 'vue';

import MInput from '../../molecules/MInput/MInput.vue';
import MButton from '../../molecules/MButton/MButton.vue';
import MRadioGroup from '../../molecules/MRadioGroup/MRadioGroup.vue';
import MQuestionIcon from '../../molecules/MQuestionIcon/MQuestionIcon.vue';
import MRadioButtonGroup from '../../molecules/MRadioButtonGroup/MRadioButtonGroup.vue';
import MSelection from '@/components/stories/molecules/MSelection/MSelection.vue';

const radio = ref(0);
const businessObject = ref(-1);

const selection1 = ref(0);
const selection2 = ref(0);

const business = [
  '서울신문', '조선일보', '한겨레신문', '한국일보',
  '아시아경제', '서울경제', '한국경제', '직접입력'
]
const selectItems1 = [
  '부동산 / 건설/ 공사 / 인테리어 / 조경 / 소방 / 설계/ 감리  / 건물관리 / 승강기 / 정화조',
  'IT / 소프트웨어 / 컴퓨터 / 시스템 / 데이터 / 인터넷 / 모바일 / 홈페이지 / 게임 / PC방 / 오락실',
  '광고 / 디자인 / 컨설팅 / 경영 / 창업 / 인력 / 경비',
  '유통 / 창고 / 물류 / 무역 / 화물 / 주유'
]
const selectItems2 = [
  '부동산 / 건설/ 공사 / 인테리어 / 조경 / 소방 / 설계/ 감리  / 건물관리 / 승강기 / 정화조',
  'IT / 소프트웨어 / 컴퓨터 / 시스템 / 데이터 / 인터넷 / 모바일 / 홈페이지 / 게임 / PC방 / 오락실',
  '광고 / 디자인 / 컨설팅 / 경영 / 창업 / 인력 / 경비',
  '유통 / 창고 / 물류 / 무역 / 화물 / 주유'
]


</script>

<template>
<div>
  <p class="title-type-1">추가정보 입력하기</p>
  <div class="infoTable">
    <div class="infoTable-row">
      <div class="infoTable-col">
        <div class="infoTable-title" style="justify-content: center;">
          <p>상호</p>
        </div>
        <div class="infoTable-content">
          주식회사 테스트에요환불은나중에
        </div>
      </div>
      <div class="infoTable-col col-right">
        <div class="infoTable-title" style="justify-content: center;">
          <p>영문 상호(선택)</p>
        </div>
        <div class="infoTable-content">
          <MInput />
        </div>
      </div>
    </div>

    <div class="infoTable-row">
      <div class="infoTable-col">
        <div class="infoTable-title">
          <p>본점 주소 (<span>*</span>)</p>
        </div>
        <div class="infoTable-content">
          <div>
            <div class="notify">* 본점 주소는 관할 지역(경남/창원시/마산합포구)으로 기재해주세요</div>
            <MInput class="infoTable-input" /> <MInput class="infoTable-input" /> <MButton class="infoTable-btn">주소검색</MButton>
          </div>
        </div>
      </div>
    </div>

    <div class="infoTable-row">
      <div class="infoTable-col">
        <div class="infoTable-title">
          <p>동일 상호 조회</p>
        </div>
        <div class="infoTable-content">
          1차 조회 완료
        </div>
      </div>
      <div class="infoTable-col col-right">
        <div class="infoTable-title">
          <p>등기방식 (<span>*</span>)</p>
        </div>
        <div class="infoTable-content">
          <MRadioGroup v-model="radio" :contents="['전자등기', '서류등기']" set-inline />
        </div>
      </div>
    </div>
    
    <div class="infoTable-row">
      <div class="infoTable-col">
        <div class="infoTable-title">
          <p>관할 등기소</p>
        </div>
        <div class="infoTable-content">
          창원지방법원 마산지원 등기계
        </div>
      </div>
      <div class="infoTable-col col-right">
        <div class="infoTable-title">
          <p>과밀억제권유무</p>
        </div>
        <div class="infoTable-content">
          아니오 (경남/창원시/마산합포구)
        </div>
      </div>
    </div>

    <div class="infoTable-row">
      <div class="infoTable-col lb">
        <div class="infoTable-title">
          <p>주식정보 (<span>*</span>)</p>
          <div class="title-desc">
            자본금 <b>2800만원까지는</b>
            공과금의 변동이 없으나 이를 초과시 공과금이 달라지며 추가결제가 필요합니다.
          </div>
        </div>
        <div class="infoTable-content">
          <div class="inner">

            <div class="inner-row">
              <div class="inner-col">
                <div class="inner-title">• 자본금(원)</div>
                <div class="inner-content"><MInput /></div>
              </div>
              <div class="inner-col inner-col2">
                <div class="inner-title">• 1주당금액(원)</div>
                <div class="inner-content"><MInput /></div>
              </div>
            </div>
            <div class="inner-row">
              <div class="inner-col">
                <div class="inner-title">• 발행주식총수(주)</div>
                <div 
                  class="inner-content inner-inputbtn"
                >
                <MInput />
                <MButton class="infoTable-btn btn">발행 주식 자동계산</MButton>
              </div>
              </div>
            </div>
            <div class="inner-row">
              <div class="inner-col">
                <div class="inner-title">
                  <div>
                    <span>• 발행예정주식총수</span>
                    <MQuestionIcon style="margin-left: 4px; display: inline-block">
                      <p class="infoTable-question">
                        장래에 발행할 주식수 상한을 의미하며 많을 수록 좋습니다. <br />
                        * 발행주식총수 x 1000으로 기본 설정됩니다. <br />
                        * 통상 천만(10,000,000)주 정도 설정
                      </p>
                    </MQuestionIcon>
                  </div>
                  
                </div>
                <div class="inner-content" style="display: flex; align-items: center;">
                  <MInput />
                  
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>

    <div class="infoTable-row">
      <div class="infoTable-col">
        <div class="infoTable-title">
          <p>
            주주 및 임원 정보 (<span>*</span>)
          </p>
          <MButton class="infoTable-btn" style="margin-top: 12px">주주, 임원 추가</MButton>
          <div class="title-desc">
            ⬆ 추가 버튼을 눌러 주주/대표이사/이사/감사를 추가해주세요.
            <br />
            <br />
            <a>>>> 주식회사의 3기관 자세히 알아보기</a>
          </div>
        </div>
        <div class="infoTable-content">
          
        </div>
      </div>
    </div>

    <div class="infoTable-row">
      <div class="infoTable-col">
        <div class="infoTable-title">
          <p>
            사업 목적 (<span>*</span>)
          </p>
        </div>
        <div class="infoTable-content">
          <div class="inner">
            <div class="inner-row"  style="margin-bottom: 12px;">
              <div class="inner-col">
                <div class="inner-title">• 선택 추가</div>
                <div class="inner-content">
                  <div class="inner-selections">
                    <MSelection v-model="selection1" :contents="selectItems1" placeholder="카테고리 선택" class="select_in1" />
                    <MSelection v-model="selection2" :contents="selectItems2" placeholder="사업목적 선택" class="select_in2" />
                  </div>
                </div>
              </div>
            </div>
            <div class="inner-row">
              <div class="inner-col">
                <div class="inner-title">• 직접 추가</div>
                <div class="inner-content inner-inputbtn">
                  <MInput class="input-in1" place-holder="사업목적을 직접 기재해주세요." />
                  <MButton class="infoTable-btn btn">추가</MButton>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="infoTable-row">
      <div class="infoTable-col">
        <div class="infoTable-title">
          <p>
            공고 방법 (<span>*</span>)
          </p>
        </div>
        <div class="infoTable-content">
          <div class="inner">
            <div class="inner-row">
              <div class="inner-col">
                <div class="inner-title">• 공고 신문사</div>
                <div class="infoTable-inner">
                <!-- <span>직접 추가</span> -->
                  <MRadioButtonGroup 
                    name="business" 
                    v-model="businessObject" 
                    :contents="business"
                    :set-inline-block="true"
                    :no-check-icon="true"
                    width="120px"
                  />
                <MInput width="100%" style="margin-top: 12px;" place-holder="공고신문사 직접입력" />
              </div>
              </div>
            </div>
            <div class="inner-row">
              <div class="inner-col"  style="margin-top: 36px;">
                <div class="inner-title">
                  • 홈페이지 주소
                  <MQuestionIcon style="margin-left: 4px; display: inline-block">
                      <p class="infoTable-question">
                          회사 홈페이지 주소를 입력해주세요. <br />
                          아직 도메인주소만 있는 상태이고 추후 홈페이지를 만들 예정이라면 
                          기재하셔도 됩니다.
                      </p>
                    </MQuestionIcon>
                </div>
                <div class="infoTable-inner">
                  <MInput width="100%" place-holder="홈페이지 주소"  />
                  <div class="warningBox">
                    * 아직 홈페이지가 없어도 도메인주소가 있으면 입력 가능합니다. 도메인 주소도 없으면 기재하지 않으셔도 됩니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>


  </div>
</div>
</template>

<style lang="scss" scoped>
.infoTable {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  &-row {
    display: flex;
    border-top: 1px solid #cccccc;
    flex-direction: row;
    @include mdAndDown {
      flex-direction: column;
    }
  }

  .col-right {
    @include mdAndDown {
      border-top: 1px solid #cccccc;
    }
  }

  &-col {
    display: flex;
    position: relative;
    flex: 1;

    @include mdAndDown {
      flex: unset;
    }
    .infoTable-title {
      min-width: 185px;
      max-width: 185px;
      // height: 80px;
      font-size: 20px;
      letter-spacing: -1.8px;
      display: flex;
      flex-direction: column;
      padding: 16px;

      @include md {
        font-size: 18px;
      }

      @include sm {
        font-size: 16px;
        min-width: 160px;
        max-width: 160px;
        padding: 12px;
      }

      @include xs {
        font-size: 16px;
        min-width: 100px;
        max-width: 100px;
        padding: 6px;
      }

      p {
        position: relative;
        padding-left: 8px;
        &:before {
          content: '';
          position: absolute;
          clear: both;
          display: block;
          top: 6px;
          width: 3px;
          height: 16px;
          left: 0;
          background: $color-basic;
        }
      }
    }

    .infoTable-input {
      margin-bottom: 16px;
    }
    .notify {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .infoTable-btn {
      font-size: 16px;
    }
    

    .infoTable-content {
      width: calc(100% - 185px);
      font-size: 18px;
      display: flex;
      align-items: center;
      border-left: 1px dashed #cccccc;
      padding: 12px 0px 12px 20px;

      @include smAndDown {
        font-size: 16px;
        width: calc(100% - 168px);
      }

      @include xs {
        padding: 8px 0 8px 8px;
        width: calc(100% - 104px);
      }
      
    }

    .infoTable-inner {
      width: 100%;
    }
  }

  &-question {
    width: 300px;
  }
}

.inner {
  // display: flex;
  .inner-row {
    
    // flex-direction: column;
    display: flex;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: unset;
    }

    @include mdAndDown {
      flex-direction: column;
    }

    .inner-col {
      flex: 1;
      display: flex;

      @include smAndDown {
        flex-direction: column;
      }

      .inner-title {
        width: 170px;
        min-width: 170px;
        font-weight: bold;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding-right: 4px;

        @include smAndDown {
          margin-bottom: 8px;
        }
      }
    }

    .inner-col2 {
      margin-left: 12px;
      @include mdAndDown {
        margin-top: 12px;
        margin-left: unset;
      }
    }
    
    .inner-inputbtn {
      display: flex;

      @include smAndDown {
        flex-direction: column;
        
      }
      .btn {
        margin-left: 12px;

        @include smAndDown {
          margin-left: unset;
          margin-top: 8px;
        }
      }
    }

    .inner-selections {
      display: flex;
      flex: 1;

      @include smAndDown {
        flex-direction: column;
      }
    }
    .select_in1, .select_in2 {
      max-width: 300px;

      @include smAndDown {
        margin-bottom: 12px;
        max-width: unset;
        width: 100%;
      }
    }
    .select_in2 {
      margin-left: 12px;

      @include smAndDown {
        margin-left: unset;
      }
    }
    .input-in1 {
      width: calc(612px - 74px);

      @include smAndDown {
        width: 100%;
      }
    }
  }
}

.title-desc {
  font-size: 14px;
  padding: 12px;
  background: #ebf0ff;
  margin-top: 12px;
  letter-spacing: -1px;

  @include xs {
    padding: 4px;
  }

  b {
    color: $color-basic;
  }

  a {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
}

.warningBox {
  border-radius: 30px;
  padding: 15px 14px 17px 46px;
  margin-top: 11px;
  background: #ebf0ff url(https://deungi24.com/img/ico_pop1.png) 18px center no-repeat;
  background-size: 22px auto;
  font-size: 13px;
}
</style>
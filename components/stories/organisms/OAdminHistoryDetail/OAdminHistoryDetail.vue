<script setup lang="ts">
import MButton from '../../molecules/MButton/MButton.vue';


const businessItems = ['부동산 경매 및 공매 입찰업', '부동산 매매업', '부동산 개발 및 시행업', '부동산 컨설팅업', '부동산 투자자문업',
  '부동산 투자업', '부동산 경매 및 공매 컨설팅업', '부동산 분양업', '인테리어 공사업(실내건축공사업)', '인테리어 디자인업', '주택신축 판매업', '부동산 분양대행업'
]
</script>

<template>
<div>
  <p class="title-type-1">
    주문내역 상세
  </p>

  <div class="hDetail">
    <div class="hDetail-row">
      <div class="hDetail-title">업무 진행상태</div>
      <div class="hDetail-content">등기매니저 확인 중</div>
    </div>

    <div class="hDetail-row">
      
      <div class="hDetail-title">상호</div>
      <div class="hDetail-content">주식회사 혜안</div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">영문상호(선택)</div>
      <div class="hDetail-content">
        <input value="HYE AHN" readonly />
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">본점주소</div>
      <div class="hDetail-content">
        <input value="경기 양주시 옥정로 200" readonly />
        <input value="506-53호" readonly />
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">동일 상호 조회</div>
      <div class="hDetail-content">아니오</div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">등기 수령 방법</div>
      <div class="hDetail-content">전자등기</div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">관할 등기소</div>
      <div class="hDetail-content">의정부지방법원 본원 의정부등기소</div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">과밀억제권역유무</div>
      <div class="hDetail-content">아니오 (경기/양주시)</div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">주식정보</div>
      <div class="hDetail-content">
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            자본금(원)
          </div>
          <div class="hDetail-table-content">
            <input value="20,000,000" readonly />
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            1주당 금액(원)
          </div>
          <div class="hDetail-table-content">
            <input value="20,000,000" readonly />
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            발행주식총수(주)
          </div>
          <div class="hDetail-table-content">
            <input value="20,000,000" readonly />
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            발행예정주식총수
          </div>
          <div class="hDetail-table-content">
            <input value="20,000,000" readonly />
          </div>
        </div>
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">임원 상세정보</div>
      <div class="hDetail-content">
        <div class="hDetail-exeCard">
          <div class="hDetail-exeCard-name">
            <span>안형진</span>&nbsp;
            <span>대표이사</span>&nbsp;
            <span>20000주</span>&nbsp;
            <span>100%</span>
          </div>
          <div class="hDetail-exeCard-info">
            <input value="서울 성북구 종암로25길 30" style="width: 300px;" readonly />
            <input value="삼성래미안 아파트 103동 503호" style="width: 300px;" readonly />
          </div>
          <div class="hDetail-exeCard-info">
            <input value="912354" style="width: 100px;" readonly />
            <input value="1276587" style="width: 100px;" readonly />
          </div>
          <div class="hDetail-exeCard-info">
            <input value="010" style="width: 60px;" readonly />
            <input value="1234" style="width: 60px;" readonly />
            <input value="5678" style="width: 60px;" readonly />
          </div>
        </div>
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">사업목적</div>
      <div class="hDetail-content">
        {{ businessItems.join(', ') }}
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">공고방법</div>
      <div class="hDetail-content">
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            공고 홈페이지
          </div>
          <div class="hDetail-table-content">
            <input value="" readonly />
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            공고 신문사
          </div>
          <div class="hDetail-table-content">
            <input value="아시아경제" readonly />
          </div>
        </div>
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">정관특약</div>
      <div class="hDetail-content">
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            주식양도제한 규정 포함
          </div>
          <div class="hDetail-table-content">
            N
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
           주식매수선택권 부여
          </div>
          <div class="hDetail-table-content">
            Y
          </div>
        </div>
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">잔고증명서정보</div>
      <div class="hDetail-content">
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            잔고증명서정보
          </div>
          <div class="hDetail-table-content">
            <input value="농협" readonly />
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
           잔고증명 기준일
          </div>
          <div class="hDetail-table-content">
            <input value="2022-09-27" readonly />
          </div>
        </div>
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">사용인감디자인</div>
      <div class="hDetail-content">N</div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">인감카드 비밀번호</div>
      <div class="hDetail-content">
        <input value="760905" readonly />
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">등기 완료 서류 받을 주소</div>
      <div class="hDetail-content">
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            받으실분
          </div>
          <div class="hDetail-table-content">
            <input value="문재인" readonly />
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            연락처
          </div>
          <div class="hDetail-table-content">
            <input value="010-1234-5678" readonly />
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            주소
          </div>
          <div class="hDetail-table-content">
            <input value="경기 용인시 처인구 모현읍 충렬로 100-99" style="width: 300px;" readonly />
            <input value="퀸즈하임 10005호" readonly />
          </div>
        </div>
      </div>
    </div>

    <div class="hDetail-row">
      <div class="hDetail-title">파일첨부</div>
      <div class="hDetail-content">
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            잔고증명서
          </div>
          <div class="hDetail-table-content">
            <input value="문재인_잔고.pdf" style="width: 300px;" readonly />
            <MButton>
              다운로드
            </MButton>
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            주민등록등본
          </div>
          <div class="hDetail-table-content">
            <input value="문재인_주민등록등본.pdf" style="width: 300px;" readonly />
            <MButton>
              다운로드
            </MButton>
          </div>
        </div>
        <div class="hDetail-table">
          <div class="hDetail-table-title">
            기타서류(선택)
          </div>
          <div class="hDetail-table-content">
            <input style="width: 300px;" readonly />
          </div>
        </div>

      </div>
    </div>
  </div>

  <p class="title-type-1">
    승인하기
  </p>

  <div class="hDetail">
    <div class="hDetail-row">
      <div class="hDetail-title">최초 결제금액</div>
      <div class="hDetail-content">
        <input value="351,900" readonly />
      </div>
    </div>
    <div class="hDetail-row">
      <div class="hDetail-title">차액</div>
      <div class="hDetail-content">
        <input value="0" readonly />
      </div>
    </div>
    <div class="hDetail-row">
      <div class="hDetail-title">최초 결제금액(예정)</div>
      <div class="hDetail-content">
        <input value="351,900" readonly />
      </div>
    </div>
  </div>

  <div class="hButtons">
    <div class="hButtons-cont">
      <MButton background-color="grey">
        뒤로가기
      </MButton>
      <MButton background-color="red">
        환불하기
      </MButton>
      <MButton>
        수정하기
      </MButton>
      <MButton background-color="orange">
        반려하기
      </MButton>
      <MButton background-color="green">
        승인하기
      </MButton>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 12px;
}

.hDetail {
  border-top: 1px solid #ddd;
  margin-bottom: 48px;
  &-row {
    display: flex;
    border-bottom: 1px solid #ddd;

    .hDetail-title {
      padding: 12px;
      background: #eee;
      min-width: 170px;
      font-size: 14px;
      font-weight: bold;
      border-right: 1px solid #ddd;
    }
  }

  &-content {
    padding: 12px;
    
    .hDetail-table {
      display: flex;
      border-bottom: 1px solid #ddd;
      border-left: 1px solid #ddd;

      &:first-child {
        border-top: 1px solid #ddd;
      }

      &-title {
        font-size: 14px;
        font-weight: bold;
        padding: 12px;
        background: #eee;
        width: 170px;
        border-right: 1px solid #ddd;
      }

      &-content {
        padding: 12px;
        border-right: 1px solid #ddd;
        width: calc(100% - 170px);
      }
    }

    .hDetail-exeCard {
      background: #EDF0FF;
      padding: 12px;

      span {
        &:nth-child(1) {
          font-size: 20px;
          font-weight: bold;
        }
        &:nth-child(2) {
          font-style: italic;
          border-left: 1px solid #494949;
          border-right: 1px solid #494949;
          padding-left: 8px;
          padding-right: 10px;
        }
      }

      &-info {
        margin-top: 8px;
      }
    }

    input {
      padding: 8px;
      margin-right: 8px;

      &:read-only {
        background: #ddd;
        border: 1px solid #aaa;
        border-radius: 4px;
      }
    }
  }
}

.hButtons {
  display: flex;
  justify-content: center;
  button {
    margin: 0 4px;
    font-size: 16px;
  }
}
</style>
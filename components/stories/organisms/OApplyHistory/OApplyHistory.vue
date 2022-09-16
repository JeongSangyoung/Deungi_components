<script setup lang="ts">

</script>

<template>
<div class="history">
  <p class="title-type-3">보로노이 주식회사 법인 설립 신청 내역</p>
  <ul class="history-ul">
    <li>
      <span class="title">법인명</span>
      <span class="content">보로노이 주식회사</span>
    </li>
    <li>
      <span class="title">법인 유형</span>
      <span class="content">사회적 기업</span>
    </li>
    <li>
      <span class="title">관할 지역</span>
      <span class="content">경북/의성군</span>
    </li>
    <li>
      <span class="title">관할 등기소</span>
      <span class="content">대구지압법원 의성지원 등기계</span>
    </li>
    <li>
      <span class="title">자본금</span> <span class="content">200,000,000원</span>
    </li>
    <li>
      <span class="title">임원</span> 
      <div class="content">김대표 대표이사,</div> <div class="content">박이사 이사</div>, <div class="content">변감사 감사</div>
    </li>
    <li>
      <span class="title">임원아닌 주주</span> <span class="content">보로노이 주식회사</span>
    </li>
    <li>
      <span class="title">등기방식</span> <span class="content">서류 등기</span>
    </li>
    <li>
      <span class="title">법인 설립 옵션</span> <span class="content">없음 또는 사용 인감 추가 주문</span>
    </li>
  </ul>
</div>

</template>

<style lang="scss" scoped>
.title-type-3 {
  margin-bottom: 8px;
}
.history {
  &-ul {
    li {
      // list-style: inside;
      margin-bottom: 8px;
      padding-left: 24px;
      font-size: 20px;
      display: flex;

      @include smAndDown {
        padding-left: 20px;
        font-size: 16px;
      }

      @include xs {
        padding-left: 16px;
      }

      &:last-child {
        margin-bottom: unset;
      }

      .title {
        // display: inline-block;
        font-weight: bold;
        width: 22%;
        letter-spacing: -1px;
        min-width: 115px;

      }
      .content {
        // display: inline-block;
      }
    }
  }
}
</style>
<script setup lang="ts">
import MButton from '@/components/stories/molecules/MButton.vue';
import MRadioButtonGroup from '@/components/stories/molecules/MRadioButtonGroup.vue';
import MInput from '@/components/stories/molecules/stories/MInput.vue';
 
const expertTooltipObjects = [
  {
    image: 'https://deungi24.com/img/illu_1.png',
    name: '등기24',
    charge: '등기24 변호사',
    content: `<p style="font-size:22px;margin:0;font-weight:bold;">
          <span style="color: #3850a1">일반적인 법인</span>으로 <span style="color: #3850a1">외부 투자</span>와 <span style="color: #3850a1">절세</span>에 유리합니다.
        </p>
        <p style="margin:0;margin-top:8px;font-size:18px">한국에서 가장 흔한 법인 유형입니다. 특수 법인이 아니면 선택하세요.<br>공개적인 투자 유치나, 상장까지도 할 수 있습니다.</p>
    `
  },
  {
    image: 'https://deungi24.com/img/illu_2.png',
    name: '등기24',
    charge: '등기24 변호사',
    content: `<p style="font-size:22px;margin:0;font-weight:bold;">
        <span style="color: #3850a1">기업 재무 정보</span>를 외부에 <span style="color: #3850a1">공개하기 싫다면</span> 선택하세요.
      </p>
      <p style="margin:0;margin-top:8px;font-size:18px">외부 투자나 상장 계획이 없다면, 기업 정보를 공개 할 의무가 없는 유한회사 법인이 유리합니다.</p>
    `,
  },
  {
    image: 'https://deungi24.com/img/illu_3.png',
    name: '등기24',
    charge: '등기24 변호사',
    content: `<p style="font-size:22px;margin:0;font-weight:bold;">
        <span style="color: #3850a1">주주 전원</span>이 <span style="color: #3850a1">농업인</span>이라면 선택하세요.
      </p>
      <p style="margin:0;margin-top:8px;font-size:18px">농/어업 법인은 각종 세금 감면 혜택과 브랜드 경쟁력을 가질 수 있습니다. 단, 주주 전원의 농업인 확인서가 있어야 설립 가능 합니다.</p>
    `,
  },
  {
    image: 'https://deungi24.com/img/illu_4.png',
    name: '등기24',
    charge: '등기24 변호사',
    content: `<p style="font-size:22px;margin:0;font-weight:bold;">
        <span style="color: #3850a1">비영리 회사</span>, <span style="color: #3850a1">협동 조합</span>을 만들고 싶다면 선택하세요.
      </p>
      <p style="margin:0;margin-top:8px;font-size:18px">각종 세금 감면 혜택이나 정부 지원을 받을 수 있습니다. 조건에 따라 일정 기준의 영리활동도 가능합니다.</p>
    `,
  }
]

</script>

<template>
  <MButton 
    content="cucucu" 
    backgroundColor="#3952B3" 
    color="white"
    rounded
  >
    <h2 style="padding:0 20px">로그인</h2>
  </MButton>

  <MButton 
    content="cucucu"
    backgroundColor="#19A29A" 
    color="white"
  >
    Button
  </MButton>

  <MRadioButtonGroup
    name="법인유형1" 
    :contents="['주식 회사', '유한 회사', '농/어업 법인', '사회적 기업, 협동조합']" 
    :defaultIndex="0"
    :expertTooltipObjects="expertTooltipObjects"
  />

  <MRadioButtonGroup
    name="임원1" 
    :contents="['임원', '임원 아닌 주주']"
    setInline
  />

  <MRadioButtonGroup 
    name="임원2" 
    :contents="['대표이사', '이사', '감사']"
    noCheckIcon
    setInline
  />


  <MRadioButtonGroup
    name="주주유형" 
    :contents="['개인', '법인']"
    setInline
    maxWidth="700px"
    :rearImages="[
      { unchecked: 'https://deungi24.com/img/ico_list4.png', checked: 'https://deungi24.com/img/ico_list4_on.png'}, 
      { unchecked: 'https://deungi24.com/img/ico_list5.png', checked: 'https://deungi24.com/img/ico_list5_on.png' }
    ]"
  />

  <MInput
    placeHolder="플레이스홀더"
    unit="달러"
    width="700px"
  />

</template>

<style>
  * {
    font-family: 'NotoSans', sans-serif, 'NanumGothic','나눔고딕','돋움', dotum, sans-serif;
  }
</style>

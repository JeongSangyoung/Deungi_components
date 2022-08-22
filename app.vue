<script setup lang="ts">
import MButton from '@/components/stories/molecules/MButton.vue';
import MRadioButtonGroup from '@/components/stories/molecules/MRadioButtonGroup.vue';
import MMainTab from '@/components/stories/molecules/MMainTab.vue';
 
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

  <MMainTab
    :items=" [
      { 
        content: '등기24 법인설립',
        to: '/'
      },
      { 
        content: '비용안내',
        to: '/cost'
      },
      { 
        content: '등기24 단독혜택',
        to: '/event'
      },
      { 
        content: '이용 후기',
        to: '/review'
      },
    ]"
    maxWidth="700px"
  />

</template>

<style>
  * {
    font-family: 'NotoSans', sans-serif, 'NanumGothic','나눔고딕','돋움', dotum, sans-serif;
  }
</style>

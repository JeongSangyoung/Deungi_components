<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import MModal from '@/components/stories/molecules/MModal/MModal.vue';
import MInput from '@/components/stories/molecules/MInput/MInput.vue';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';

interface PropType {
  modelValue: number | '';
  corpName: string;
}
const props = withDefaults(defineProps<PropType>(), {});

const input = ref<string|number>('');
watchEffect(() => {
  input.value = props.modelValue;
})

const emit = defineEmits(['verify', 'update:modelValue'])
const clickBtn = () => {
  emit('verify', { verified: true })
}
const changeValue = (input) => {
  emit('update:modelValue', input)
}

</script>

<template>
<p class="title-type-1">{{ corpName }}의<br /> 기초 자본금은 어떻게 되나요?</p>
<p class="txt-20">:주주들이 돈을 모아, 회사를 설립할 때 기초가되는 <b>총 자본</b>입니다.</p>

<!-- 자본금 정보 모달 -->
<MModal class="cap-modal" max-width="880px">
  <template #activator="{ on }">
    <MButton class="cap-modal-btn" rounded background-color="#ECF0FF" v-on="on">
      <div><b>*</b>자본금은 <b>얼마</b>로 하면 되나요? ></div>
    </MButton>
  </template>
  <template #content="{ on }">
    <p class="txt-28 modal-title"><b>자본금</b>은 얼마로 하면 되나요?</p>
    <hr />
    <p class="title-type-2">자본금이 <b>많으면?</b></p>
    <p class="txt-18 modal-content">법인 설립 시 자본금이 많으면 재무상태가 탄탄해보이고 나중에 대출을 받을 때 유리할 수 있습니다.</p>

    <p class="title-type-2">자본금이 <b>적으면?</b></p>
    <p class="txt-18 modal-content">법인설립시 자본금이 적으면 추후에 자본금을 늘릴 때 "증자"등기를 하면 되기 때문에 자본금을 줄이는 경우보다 덜 복잡합니다. 다만 자본금이 너무 적으면 법인 설립 후 사업자등록이 거절 될 수 있습니다.</p>

    <p class="title-type-2">통계에 따르면 국내 법인의 자본금 분포는 다음과 같습니다.</p>

    <ul class="cap-distribution">
      <li><b>21%</b>:<br class="display-xs" /> 1,000만원</li>
      <li><b>19%</b>:<br class="display-xs" /> 1억원</li>
      <li><b>18%</b>:<br class="display-xs" /> 100만원</li>
      <li><b>16%</b>:<br class="display-xs" /> 5,000만원</li>
      <li>나머지:<br class="display-xs" /> 상기 금액 이외의 금액</li>
    </ul>

    <p class="title-type-2">건설업/금융업 등 <b>일부 인허가 업종</b>은 자본금 제한이 있습니다.</p>

    <div class="modal-act">
      <MButton v-on="on">확인</MButton>
    </div>

  </template>
</MModal>

<!-- 입력칸 -->
<div class="input-container">
  <MInput 
    v-model="input"
    class="input-name" 
    place-holder="100원 이상 입력하세요."
    type="number"
    unit="원"
    :maxlength="16"
    @update:modelValue="changeValue"
    :convert="true"
    :locale="true"
  />
  <div class="input-desc display-xs">
    <p class="txt-16">* 자본금 2,800만원 까지는 등록면허세가 동일합니다.</p>
    <p class="txt-16">* 자본금에 비례하여 등록면허세가 높아집니다.</p>
  </div>
  <MButton class="input-btn" :disabled="!input" @click="clickBtn">
    입력
  </MButton>
</div>
<div class="input-desc none-xs">
  <p class="txt-16">* 자본금 2,800만원 까지는 등록면허세가 동일합니다.</p>
  <p class="txt-16">* 자본금에 비례하여 등록면허세가 높아집니다.</p>
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
.txt-20 {
  color: #3A52B4;
}

.input-container {
  display: flex;
  
  @include xs {
    flex-direction: column;
    margin-bottom: 56px;
  }

  .input-btn {
    font-size: 20px;
    height: 70px;
    width: 150px;
    margin-left: 12px;

    @include smAndDown {
      height: 62px;
    }

    @include xs {
      font-size: 18px;
      margin: 0 auto;
      margin-top: 24px;
    }
  }

  .input-name {
    width: calc(100% - 150px);
    @include xs {
      width: 100%;
      margin: 0 auto;
    }
  } 
}

.cap-modal {
  @include xs {
    display: flex;
    justify-content: center;
  }

  &-btn {
    font-size: 16px;
    padding: 12px 28px;
    margin-bottom: 24px;
    margin-top: 12px;
    
    div {
      color: #666;
    }

    b {
      color: $color-basic;
    }
  }
}

.modal-title {
  font-family: 'GmarketSans';
  font-weight: 500;
  letter-spacing: -1.5px;
  text-align: center;

  b {
    color: $color-basic;
  }
}
.title-type-2 {
  b {
    color: $color-basic;
  }
}

.modal-content {
  color: #666;
  padding-left: 16px;
}

.modal-act {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  letter-spacing: -1px;

  @include xs {
    flex-direction: column;
    margin-top: 16px;
  }

  button {
    width: 150px;
    font-size: 20px;
    padding: 16px 24px;

    @include xs {
      width: 100%;
    }
  }
}

.input-desc {
  margin-bottom: 56px;
  @include xs {
    margin-bottom: unset;
  }
  p {
    color: #707899;
    margin: 2px 0;
  }
}

.cap-distribution {
  display: flex;
  margin: 16px 0;

  li {
    padding: 20px 12px;

    @include xs {
      font-size: 12px;
      padding: 8px;
    }
  }
  li:nth-child(1) {
    background: #EAEEFF;
    flex-grow: 1;
  }
  li:nth-child(2) {
    background: #D9E0FF;
    flex-grow: 1;
  }
  li:nth-child(3) {
    background: #C3CFFE;
    flex-grow: 1;
  }
  li:nth-child(4) {
    background: #D9E0FF;
    flex-grow: 1;
  }
  li:nth-child(5) {
    background: #3B53B5;
    color: white;
    flex-grow: 1;
  }
}
</style>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import MInput from '../../molecules/MInput/MInput.vue';
import MModal from '../../molecules/MModal/MModal.vue';
import MButton from '../../molecules/MButton/MButton.vue';
  
interface PropType {
  email?: string;
  applicant?: string;
  tel1?: number,
  tel2?: number,
  tel3?: number
}

const props = withDefaults(defineProps<PropType>(), {}) 

const email1 = ref<string>('');
const email2 = ref<string>('');
const email = ref<string>('');
const password1 = ref<string>('');
const password2 = ref<string>('');
const applicant = ref<string>('');
const tel1 = ref<number>();
const tel2 = ref<number>();
const tel3 = ref<number>();
watchEffect(() => {
  email.value = props.email;
  applicant.value = props.applicant;
  tel1.value = props.tel1;
  tel2.value = props.tel2;
  tel3.value = props.tel3;
});

const setEmail = (on) => {
  // 이메일 검증 api 필요.
  // 검증확인되면 email에 값 채워넣고 click메서드 실행 
  email.value = email1.value + '@' + email2.value;
  on.click();
}
const emit = defineEmits(['verify', 'update:values'])
const changeValues = () => {
  if (
    !password1.value || !password2.value
    || !email.value || !applicant.value  
    || !tel1.value || !tel2.value || !tel3.value
  ) {
    emit('verify', { verified: false })
  } else {
    emit('verify', { verified: true })
    emit('update:values', {
      password: password2.value,
      applicant: applicant.value,
      email: email.value,
      tel: tel1.value + '-' +tel2.value + '-' + tel3.value
    })
  }
}

</script>

<template>
<div class="signin">
  <p class="title-type-3">담당자 정보</p>
  <p class="signin-txt">법인 설립 절차를 안내 받으실 분의 정보입니다.</p>

  <div class="search-container">
    <MInput 
      v-model="email"
      :readonly="true" 
      place-holder="조회 버튼을 클릭해주세요." 
      class="search-input" 
      @update:modelValue="changeValues" 
    />
    
    <MModal class="search-modal">
      <template #activator="{ on }">
        <div class="search-btn-box">
          <MButton 
            width="150px"
            v-on="on"
            class="search-btn btn-winput"
            >
            조회
          </MButton>
        </div>
      </template>
      
      <template #content="{ on }">
        <div class="modal-container">
          <div class="verify-icon">
            <img src="https://deungi24.com/img/ico_pop1.png" />
          </div>
          <p class="txt-28 modal-title">절차를 안내 받으실 이메일 주소를 입력하세요.</p>
          <p class="txt-16 modal-content">입력하신 이메일 주소는 로그인 아이디로 사용됩니다</p>

          <div class="modal-act">
            <div class="modal-act-input">
              <MInput v-model="email1" /> 
              <div class="text-middle">@</div> 
              <MInput v-model="email2" />
            </div>

            <MButton :disabled="!email1 || !email2" @click="setEmail(on)">조회</MButton>
          </div>
        </div>

      </template>
  
      </MModal>

  </div>

  <div v-if="email">
    <MInput v-model="password1" type="password" place-holder="비밀번호 (6자리이상)" class="input-mg" @update:modelValue="changeValues" />
    <MInput v-model="password2" type="password" place-holder="비밀번호 확인" class="input-mg" @update:modelValue="changeValues" />
    <MInput v-model="applicant" place-holder="신청자 성함" class="input-mg" @update:modelValue="changeValues" />

    <div class="input-tel">
      <MInput 
        v-model="tel1" 
        max-width="120px" 
        place-holder="휴대전화" 
        type="number"
        @update:modelValue="changeValues"
      /> <div class="text-middle">-</div> 
      <MInput v-model="tel2" max-width="120px" type="number" @update:modelValue="changeValues" /> 
      <div class="text-middle">-</div>
      <MInput v-model="tel3" max-width="120px" type="number" @update:modelValue="changeValues" />
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
.title-type-3 {
  margin-bottom: 8px;
}
.signin {
  &-txt {
    padding-left: 24px;
    margin-bottom: 16px;
  }

  @include smAndDown {
    padding-left: 20px;
  }

  @include xs {
    padding-left: 16px;
  }
}

.search-container {
  display: flex;
  margin-bottom: 16px;
  
  @include xs {
    flex-direction: column;
  }
  .verify-icon {
    text-align: center;
    margin-bottom: 12px;
  }

  .modal-title {
    font-family: 'GmarketSans';
    font-weight: 500;
    letter-spacing: -1.5px;
    text-align: center;
  }


  .modal-content {
    text-align: center;
    color: #666;
  }

  .search-modal {
    margin: 0 auto;
  }

  .search-input {
    width: calc(100% - 150px);
    @include xs {
      width: 100%;
      margin: 0 auto;
    }
  } 

  .search-btn-box {
    display: flex; 
    justify-content: center;
  }

  .search-btn {
    margin-left: 12px;

    @include xs {
      margin: 0 auto;
      margin-top: 12px;
      padding: 16px 24px;
    }
  }

  .modal-container {
    padding: 12px 28px 24px 28px;
    max-width: 600px;

    @include xs {
      padding: 6px 12px 12px 6px;
    }
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
    
    &-input {
      display: flex;
    }

    button {
      margin: 0 16px;
      width: 150px;
      @include xs {
        margin: 0;
        margin-top: 12px;  
        width: 100%;
      }
    }

  }
}

.text-middle {
  display: flex;
  align-items: center;
  margin: 0 4px;
  font-size: 20px;

  @include xs {
    font-size: 16px;
    margin: 0 2px;
  }
}

.input-mg {
  margin-bottom: 16px;
}
.input-tel {
  display: flex;
  width: 100%;
}
</style>
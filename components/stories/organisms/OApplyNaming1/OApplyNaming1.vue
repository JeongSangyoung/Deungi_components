<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import MInput from '@/components/stories/molecules/MInput/MInput.vue';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';
import MModal from '@/components/stories/molecules/MModal/MModal.vue';

import { ILocation } from '@/types'
interface PropType {
  modelValue: string;
  location: ILocation
  verifyFunc?: () => boolean;
}

const props = withDefaults(defineProps<PropType>(), {
  verifyFunc: () => {
    console.log('검증함수를 넣으시오.')
    return true;
  }
})

const verified = ref<boolean>(false);
const corpName = ref<string>();
watchEffect(() => {
  corpName.value = props.modelValue
})

const emit = defineEmits(['verify']);
  
const checkName = () => {
  const success = props.verifyFunc();
  verified.value = success;
}

const verify = (v: boolean) => {
  emit('verify', { verified: v, corpName: corpName.value })
}

</script>

<template>
<div>
  <p class="title-type-1">설립하실 회사 이름은?!</p>
  <p class="txt-20"><b>{{ props.location.sido }} {{ props.location.sigungu }} {{ props.location.third }}</b> 소재 (예정)</p>
  <div class="search-container">
    <MInput 
      v-model="corpName"
      class="search-input" 
      place-holder="'주식회사', '<주>'를 제외하고 입력하세요."
    />
    <MModal class="search-modal">
      <template #activator="{ on }">
        <div class="search-btn-box">
          <MButton 
            width="150px"
            v-on="on"
            class="search-btn btn-winput"
            :disabled="!corpName"
            @click="checkName"
          >
            회사이름조회
          </MButton>
        </div>
      </template>
  
      <template #content="{ on }">
        <div v-if="verified" class="modal-container">
          <div class="verify-icon">
            <img src="https://deungi24.com/img/ico_pop2.png" />
          </div>
          <p class="txt-28 modal-title"><span style="color: #3952B3">{{ corpName }}</span>은(는) 지금 설립 가능합니다</p>
          <p class="txt-16 modal-content">동일 지역에서 동일한 이름을 가진 회사가 없습니다. <br />
          멋진 회사이름! {{ corpName }}(으)로 결정 하시겠습니까?
          </p>
          <div class="modal-act">
            <MButton background-color="#999999" v-on="on" @click="verify(false)">이름 변경</MButton>
            <MButton @click="verify(true)">결정</MButton>
          </div>
        </div>
  
        <div v-else class="modal-container">
          <div class="verify-icon">
            <img src="https://deungi24.com/img/ico_pop1.png" />
          </div>
  
          <p class="txt-28 modal-title">설립하실<span style="color: #3952B3">회사 이름</span>을 입력해주세요</p>
          <p class="txt-16 modal-content">멋진 회사 이름을 결정해주세요<br />
          (숫자로만 된 상호는 사용할 수 없습니다.)
          </p>
  
          <div class="modal-act">
            <MButton v-on="on" @click="verify(false)">확인</MButton>
          </div>
          
        </div>
      </template>
  
      </MModal>
  </div>
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
.search-container {
  display: flex;
  
  @include xs {
    flex-direction: column;
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
    padding: 12px 32px 24px 32px;
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

.verify-icon {
  text-align: center;
  margin-bottom: 12px;
}
</style>
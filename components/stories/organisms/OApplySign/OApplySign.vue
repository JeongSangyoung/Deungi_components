<script setup lang="ts">
import { ref } from 'vue';
import MInput from '../../molecules/MInput/MInput.vue';
import MModal from '../../molecules/MModal/MModal.vue';
import MButton from '../../molecules/MButton/MButton.vue';

const input = ref('');

</script>

<template>
<div class="signin">
  <p class="title-type-3">담당자 정보</p>
  <p class="signin-txt">법인 설립 절차를 안내 받으실 분의 정보입니다.</p>

  <div class="search-container">
    <MInput 
      v-model="input" 
      :readonly="true" 
      place-holder="조회 버튼을 클릭해주세요." 
      class="search-input"  
    />
    
    <MModal class="search-modal">
      <template #activator="{ on }">
        <div class="search-btn-box">
          <MButton 
            width="150px"
            v-on="on"
            class="search-btn"
            >
            <!-- :disabled="!corpName" -->
            <!-- @click="checkName" -->
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
              <MInput /> <div class="text-middle">@</div> <MInput />
            </div>
            
            <MButton>조회</MButton>
          </div>
        </div>
          
        
      </template>
  
      </MModal>

  </div>

  <div>
    <MInput type="password" place-holder="비밀번호 (6자리이상)" class="input-mg" />
    <MInput type="password" place-holder="비밀번호 확인" class="input-mg" />
    <MInput place-holder="신청자 성함" class="input-mg" />

    <div class="input-tel">
      <MInput max-width="120px" place-holder="휴대전화" type="number" /> <div class="text-middle">-</div> 
      <MInput max-width="120px" type="number" /> <div class="text-middle">-</div>
      <MInput max-width="120px" type="number" />
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
  button {
    font-size: 20px;
    height: 70px;

    @include smAndDown {
      height: 62px;
    }

    @include xs {
      font-size: 18px;
    }

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
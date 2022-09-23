<script setup lang="ts">
import { ref } from 'vue';
import MInput from '../../molecules/MInput/MInput.vue';
import MButton from '../../molecules/MButton/MButton.vue';
import MModal from '../../molecules/MModal/MModal.vue';

const userId = ref<string>('');
const userPw = ref<string>('');
const userName = ref<string>('');
const tel1 = ref<number>();
const tel2 = ref<number>();
const tel3 = ref<number>();

</script>

<template>
<div>
  <p class="title-type-1">
    <span>계정</span> 설정
  </p>

  <div>
    <div>
      <div>아이디</div>
      <div><MInput v-model="userId" /></div>
    </div>
    <div>
      <div>이름</div>
      <div><MInput v-model="userName" /></div>
    </div>
  </div>
  <div>
    <div>
      <div>비밀번호</div>
      <div>
        <MModal>
          <template #activator="{ on }">
            <MButton v-on="on">비밀번호 변경</MButton>
          </template>

          <template #content="{ on }">

          </template>
        </MModal>
      </div>
    </div>
    <div>
      <div>연락처</div>
      <div><MInput v-model="tel1" />-<MInput v-model="tel2" />-<MInput v-model="tel3" /></div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  span {
    color: $color-basic;
  }
}
</style>
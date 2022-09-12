<script setup lang="ts">
import { ref } from 'vue';
import { IExecutive } from '@/types';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';
import ApplyLayout from '@/layouts/apply.vue';
import OApplyCapital from '@/components/stories/organisms/OApplyCapital/OApplyCapital.vue';
import OApplyExecutives from '@/components/stories/organisms/OApplyExecutives/OApplyExecutives.vue';
import Dummy from '@/components/composable/useDummy';

const step = ref<number>(1);
const capital = ref<number|''>('');

const verified1 = ref<boolean>(false);
const verified2 = ref<boolean>(false);
const corpName = ref<string>('');
const executiveList = ref<IExecutive[]>([]);

Dummy<string>('corpName').then(result => corpName.value = result);
Dummy<number>('capital').then(result => capital.value = result);
Dummy<IExecutive[]>('executives').then(result => executiveList.value = result);

const capitalVerify = (data) => {
  verified1.value = data.verified;
  if (data.verified) {
    step.value = 2;
  }
}
const exeVerify = (data) => {
  verified2.value = data.verified;
}

const emit = defineEmits(['submit'])
const submit = () => {
  emit('submit', {
    capital: capital.value,
    executives: executiveList.value,
  })
}

</script>

<template>
<ApplyLayout>
  <div v-show="step >= 1">
    <OApplyCapital
      v-model="capital"
      :corp-name="corpName"
      @verify="capitalVerify"
    />
  </div>

  <div v-show="step === 2">
    <OApplyExecutives v-model="executiveList" :corp-name="corpName" @verify="exeVerify" />
  
    <div style="display: flex; justify-content: center">
      <MButton 
        class="next-btn" 
        width="100%"
        max-width="400px"
        @click="submit"
      >
        <div>
          <span v-if="executiveList.length">
            다음
          </span>
          <span v-else>
            주주, 임원 정보 다음에 입력하기
          </span>
          <img src="https://deungi24.com/img/ico-1.png" />
        </div>
      </MButton>
    </div>

  </div>
</ApplyLayout>
</template>

<style lang="scss" scoped>
.next-btn {
  margin-top: 24px;
}
</style>
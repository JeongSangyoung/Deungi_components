<script setup lang="ts">
import { ref, computed } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';
import OApplyMap from '@/components/stories/organisms/OApplyMap/OApplyMap.vue';
import OApplyNaming1 from '@/components/stories/organisms/OApplyNaming1/OApplyNaming1.vue';
import OApplyNaming2 from '@/components/stories/organisms/OApplyNaming2/OApplyNaming2.vue';

import Data from '@/components/composable/useData';
import { ILocation } from '@/types';

const step = ref(1);
const radio = ref<number>(-1);
const location = ref<ILocation>({ sido:'', sigungu: '', third: '' });
const corpName = ref<string>();
const crowded = ref<boolean>();
const verified1 = ref<boolean>(false);
const verified2 = ref<boolean>(false);
const verified3 = ref<boolean>(false);

Data<string>('corpName').then(result => corpName.value = result);
Data<ILocation>('location').then(result => location.value = result);

const mapVerify = (data) => {
  crowded.value = data.croweded;
  verified1.value = data.verified;
}
const name1Verify = (data) => {
  corpName.value = data.corpName
  verified2.value = data.verified;
  if (verified2.value) {
    nextStep()
  }
}
const name2Verify = (data) => {
  verified3.value = data.verified;
}

const nextStep = () => {
  window.scrollTo(0, 0);
  step.value += 1
  // 뒤로가기일 때 고려해야함.
}

const emit = defineEmits(['submit'])
const submit = () => {
  emit('submit', {
    location: location.value,
    croweded: crowded.value,
    corpName: corpName.value,
    rear: radio.value ? true : false,
  });
}

</script>

<template>
<ApplyLayout>
  <div v-if="step === 1">
    <OApplyMap v-model="location" @verify="mapVerify"/>
    <div style="display: flex; justify-content: center">
      <MButton
        class="next-btn" 
        width="100%"
        max-width="400px"
        @click="nextStep"
        :disabled="!verified1"
      >
        <div>
          다음
          <img src="https://deungi24.com/img/ico-1.png" />
        </div>
      </MButton>
    </div>
  </div>

  <div v-if="step === 2">
    <OApplyNaming1 v-model="corpName" :location="location" @verify="name1Verify"/>
  </div>

  <div v-if="step === 3">
    <OApplyNaming2 v-model="radio" :corp-name="corpName" @verify="name2Verify" />

    <div style="display: flex; justify-content: center">
      <MButton
        class="next-btn" 
        width="100%"
        max-width="400px"
        :disabled="!verified3"
        @click="submit"
        >
        <div>
          다음
          <img src="https://deungi24.com/img/ico-1.png" />
        </div>
      </MButton>
    </div>
  </div>
</ApplyLayout>

</template>

<style lang="scss" scoped>
.next-btn {
  margin-top: 48px;
  margin-bottom: 48px;
}
</style>
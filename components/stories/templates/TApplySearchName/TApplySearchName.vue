<script setup lang="ts">
import { ref, computed } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';
import OApplyMap from '@/components/stories/organisms/OApplyMap/OApplyMap.vue';
import OApplyNaming1 from '@/components/stories/organisms/OApplyNaming1/OApplyNaming1.vue';
import OApplyNaming2 from '@/components/stories/organisms/OApplyNaming2/OApplyNaming2.vue';

import Dummy from '@/components/composable/useDummy';
import { ILocation, TransferType } from '@/types';

interface IMapState {
  location: ILocation;
  croweded: boolean;
  verified: boolean;
}
interface IName1State {
  corpName: string;
  verified: boolean;
}
interface IName2State {
  radio: number;
  verified: boolean;
}

const step = ref(1);
const radio = ref<number>(-1);
const location = ref<ILocation>({ sido:'', sigungu: '', third: '' });
const corpName = ref<string>();
const crowded = ref<boolean>();
const verified1 = ref<boolean>(false);
const verified2 = ref<boolean>(false);
const verified3 = ref<boolean>(false);

Dummy<string>('corpName').then((result) => corpName.value = result);
Dummy<ILocation>('location').then((result) => location.value = result);


const name1Args = computed(():TransferType => {
  return {
    state: {
      corpName: corpName.value
    },
    propsData: {
      location: location.value
    }
  }
})
const name2Args = computed(():TransferType => {
  return {
    state: {
      radio: radio.value
    },
    propsData: {
      corpName: corpName.value
    }
  }
})

const mapVerify = (data: IMapState) => {
  location.value = data.location;
  crowded.value = data.croweded;
  verified1.value = data.verified;
}
const name1Verify = (data: IName1State) => {
  console.log(data);
  corpName.value = data.corpName;
  verified2.value = data.verified;
  if (verified2.value) {
    next_step()
  }
}
const name2Verify = (data: IName2State) => {
  radio.value = data.radio
  verified3.value = data.verified;
}


const next_step = () => {
  window.scrollTo(0, 0);
  step.value += 1
}

</script>

<template>
<ApplyLayout>
  <div v-if="step === 1">
    <OApplyMap v-model:location="location" @verify="mapVerify"/>
    <div style="display: flex; justify-content: center">
      <MButton
        class="next-btn" 
        width="100%"
        max-width="400px"
        @click="next_step"
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
    <OApplyNaming1 v-bind="name1Args" @verify="name1Verify"/>
  </div>

  <div v-if="step === 3">
    <OApplyNaming2 v-bind="name2Args" @verify="name2Verify" />

    <div style="display: flex; justify-content: center">
      <MButton
        class="next-btn" 
        width="100%"
        max-width="400px"
        :disabled="!verified3"
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
}
</style>
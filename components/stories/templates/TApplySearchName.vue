<script setup lang="ts">
import { ref } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';
import MButton from '@/components/stories/molecules/MButton.vue';
import OApplyMap from '@/components/stories/organisms/OApplyMap.vue';
import OApplyNaming1 from '@/components/stories/organisms/OApplyNaming1.vue';
import OApplyNaming2 from '@/components/stories/organisms/OApplyNaming2.vue';

import { ILocation, TransferType } from '@/types';

interface PropType {
  location: ILocation;
  corpName: string;
}
  
interface IMapState {
  location: ILocation;
  croweded: boolean;
  verified: boolean;
}
interface IName1State {
  corpname: string;
  verified: boolean;
}
interface IName2State {
  radio: number;
  verified: boolean;
}

const props = withDefaults(defineProps<PropType>(), {})

const step = ref(1)
const radio = ref<number>(-1);
const location = ref<ILocation>();
const corpName = ref<string>();
const crowded = ref<boolean>();
const verified1 = ref<boolean>(false);
const verified2 = ref<boolean>(false);
const verified3 = ref<boolean>(false);
corpName.value = props.corpName;
location.value = props.location;


const mapArgs: TransferType = {
  state: {
    location: location.value
  }
}
const name1Args: TransferType = {
  state: {
    corpName: corpName.value
  },
  propsData: {
    location: location.value
  }
}
const name2Args: TransferType = {
  state: {
    radio: radio.value
  },
  propsData: {
    corpName: corpName.value
  }
}

const mapVerify = (data: IMapState) => {
  location.value = data.location;
  crowded.value = data.croweded;
  verified1.value = data.verified;
}
const name1Verify = (data: IName1State) => {
  corpName.value = data.corpname;
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
  <div v-show="step === 1">
    <OApplyMap v-bind="mapArgs" @verify="mapVerify"/>
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

  <div v-show="step === 2">
    <OApplyNaming1 v-bind="name1Args" @verify="name1Verify"/>
  </div>

  <div v-show="step === 3">
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
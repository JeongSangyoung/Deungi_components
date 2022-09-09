<script setup lang="ts">
import { ref } from 'vue';
import { IExecutive, TransferType } from '@/types';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';
import ApplyLayout from '@/layouts/apply.vue';
import OApplyCapital from '@/components/stories/organisms/OApplyCapital/OApplyCapital.vue';
import OApplyExecutives from '@/components/stories/organisms/OApplyExecutives/OApplyExecutives.vue';

interface PropType {
  capital: number;
  executives: IExecutive[];
  corpName: string;
}
interface ICapitalState {
  capital: number;
  verified: boolean;
}
interface IExeState {
  executives: IExecutive[];
  verified: boolean;
}

const props = withDefaults(defineProps<PropType>(), {})

const step = ref<number>(1);
const capital = ref<number>();
const executives = ref<IExecutive[]>([]);
const verified = ref<boolean>(false);
capital.value = props.capital;
executives.value = props.executives;

const capitalArgs: TransferType = {
  state: {
    capital: props.capital
  },
  propsData: {
    corpName: props.corpName
  }
}
const exeArgs: TransferType = {
  state: {
    executives: props.executives
  },
  propsData: {
    corpName: props.corpName
  }
}

const capitalVerify = (data: ICapitalState) => {
  step.value = 2;
  capital.value = data.capital;
}

const exeVerify = (data: IExeState) => {
  executives.value = data.executives;
  verified.value = data.verified;
}

</script>

<template>
<ApplyLayout>
  <div v-show="step >= 1">
    <OApplyCapital 
      v-bind="capitalArgs" @verify="capitalVerify"
    />
  </div>

  <div v-show="step === 2">
    <OApplyExecutives v-bind="exeArgs" @verify="exeVerify" />
  
    <div style="display: flex; justify-content: center">
      <MButton 
        class="next-btn" 
        width="100%"
        max-width="400px"
      >
        <div>
          <span v-if="executives.length">
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
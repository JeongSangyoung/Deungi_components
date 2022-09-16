<script setup lang="ts">
import { ref } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';

import MButton from '@/components/stories/molecules/MButton/MButton.vue';

import MCheckImage from '@/components/stories/molecules/MCheckImage/MCheckImage.vue';
import OApplySelectService from '@/components/stories/organisms/OApplySelectService/OApplySelectService.vue';
import OBill from '@/components/stories/organisms/OBill/OBill.vue';

import { IBill, IRegMethodItems, IBenefitItem } from '@/types';
import Data from '@/components/composable/useData';
import MCheckButton from '../../molecules/MCheckButton/MCheckButton.vue';

const radio = ref<number>(-1);
const bill = ref<IBill[]>([]);
const serviceGroup = ref<IRegMethodItems[]>([]);
const benefitItems = ref<IBenefitItem[]>([]);
const step = ref<number>(1);

Data<IRegMethodItems[]>('serviceGroup').then(result => serviceGroup.value = result);
Data<IBill[]>('billItems').then(result => bill.value = result);
Data<string>('service').then(result => {
  radio.value = ['전자등기', '서류등기'].findIndex(item => item === result);
});
Data<IBenefitItem[]>('benefitItems').then(result => benefitItems.value = result);

const submit = () => {
  if (step.value === 1) {
    step.value += 1;
    window.scrollTo(0, 0);
  } else {

  }
}

</script>
  
<template>
<ApplyLayout>
  <div class="billContainer">
    <div id="serviceLeft">
      
      <OApplySelectService
        v-if="step === 1"
        v-model="radio" 
        :items="serviceGroup" 
      />
      
      <div v-if="step === 2">
        <MCheckImage
          v-for="(item, item_idx) in benefitItems"
          :key="item.name"
          v-bind="item"
          class="benItem"
          :class="{ 'benItem-left': item_idx % 2 === 0, 'benItem-right': item_idx % 2 }"
        />
        <MCheckButton name="test">
          <div>
            <div>(옵션) 사용 인감 추가 제작</div>
            <p>
              법인 인감을 대체해서 편리하게 사용 가능합니다. <br/>
              만년도장 (17.5mm), 고급일제 잉크, 도장 집
            </p>
          </div>
          <div>
            + 15,000원
          </div>
        </MCheckButton>
      </div>
    </div>

    <div id="bill">
      <OBill
        :items="bill"
      />  
    </div>
  </div>

  <div style="display: flex; justify-content: center">
    <MButton 
      class="next-btn" 
      width="100%"
      max-width="400px"
      :disabled="radio === -1"
      @click="submit"
      >
      <div>
        <span v-if="step === 1">
          추가 혜택 선택하기
        </span>
        <span v-else>
          결제하기
        </span>
        <img src="https://deungi24.com/img/ico-1.png" />
      </div>
    </MButton>
  </div>
</ApplyLayout>

</template>
  
<style lang="scss" scoped>
.next-btn {
  margin-top: 48px;
  margin-bottom: 48px;
}
.billContainer {
  display: flex;

  @include smAndDown {
    flex-direction: column;
  }
}
#serviceLeft {
  // display: inline-block;
  width: 50%;

  @include smAndDown {
    width: 100%;
  }
}
#bill {
  width: 50%;
  display: block;
  margin-left: 36px;
  // width: 100%;

  @include smAndDown {
    width: 100%;
    margin-bottom: unset;
    margin-left: unset;
    margin-top: 24px;
  }
}
.benItem {
  width: calc(50% - 8px);
  margin-bottom: 16px;
  @include xs {
    width: calc(50% - 4px);
    margin-bottom: 4px; 
  }

  &-left {
    margin-right: 8px;
    @include xs {
      margin-right: 4px;  
    }
  }
  &-right {
    margin-left: 8px;
    @include xs {
      margin-left: 4px;  
    }
  }

}
</style>
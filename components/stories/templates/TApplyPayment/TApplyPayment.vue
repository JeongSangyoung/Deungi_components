<script setup lang="ts">
import { ref } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';
import OApplyHistory from '../../organisms/OApplyHistory/OApplyHistory.vue';
import OApplySign from '../../organisms/OApplySign/OApplySign.vue';
import OApplyAgree from '../../organisms/OApplyAgree/OApplyAgree.vue';
import OBill2 from '../../organisms/OBill2/OBill2.vue';
import { IBill } from '@/types';
import Data from '@/components/composable/useData';
import OApplyPayby from '../../organisms/OApplyPayby/OApplyPayby.vue';

const bill = ref<IBill[]>([]);

Data<IBill[]>('billItems').then(result => bill.value = result);

</script>

<template>

<ApplyLayout>
  <div class="payintro">
    <span class="txt1">
      오늘 결제 시,<br />
      5일 이내 법인설립이 완료 됩니다.<br />
    </span>
    <span class="txt2">
      :법인설립 완료 예정일: 2022.9.21
    </span>
  </div>
  <div class="payCont">
    <OApplyHistory class="payItem" />
    <OApplySign class="payItem" />
    <OApplyAgree class="payItem" />
    <OBill2 :items="bill" class="payItem" />
    <OApplyPayby class="payItem" />
  </div>
</ApplyLayout>

</template>

<style lang="scss" scoped>
.payintro {
  background: $color-basic;
  color: white;
  text-align: center;
  // width: 200%;
  // transform: translateX(-25%);
  padding: 56px 24px;
  width: 100%;
  box-sizing: border-box;

  .txt1 {
    font-size: 28px
  }

  .txt2 {
    font-size: 20px;
  }
}


.payCont {
  padding: 48px 12px;
  background: #eee;
  
  // width: 200%;
  // transform: translateX(-25%);
  // position: relative;

  @include xs {
    padding: 36px 4px;
  }
  .payItem {
    margin-bottom: 24px;
    background: #fff;
    padding: 36px;
    // width: 50%;
    // transform: translateX(50%);
    // position: absolute;

    @include smAndDown {
      padding: 20px;
    }

    @include xs {
      padding: 12px;
    }
  }
}
</style>
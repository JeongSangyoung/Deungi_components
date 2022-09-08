<script setup lang="ts">
import { ref, computed } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';
import OApplySelectType from '@/components/stories/organisms/OApplySelectType/OApplySelectType.vue';
import { IStep1CorpItem, TransferType } from '@/types';
import Dummy, { dummy } from '@/components/composable/useDummy';


interface ISelectState {
  radio: number;
  verified: boolean;
}

const radio = ref<number>();
const verified = ref<boolean>(false);
const corpItems = ref<IStep1CorpItem[]>([]);

let corpType = '';

// Fetch
Dummy<IStep1CorpItem[]>('corpItems').then((result) => corpItems.value = result);
Dummy<string>('corpType').then((result) => {
  radio.value = corpItems.value.findIndex(corp => {
    return corp.content === result;
  });
});

const updateSelect = (data: ISelectState) => {
  verified.value = data.verified;
  radio.value = data.radio;
}
</script>

<template>
<ApplyLayout>
  <OApplySelectType
    id="selectType"
    :state="{ radio }"
    :propsData="{ name: 'selectType', items: corpItems }"
    @verify="updateSelect"
  />

  <div style="display: flex; justify-content: center">
    <MButton 
      class="next-btn" 
      width="100%"
      max-width="400px"
      :disabled="!verified"
      >
      <div>
        다음
        <img src="https://deungi24.com/img/ico-1.png" />
      </div>
    </MButton>
  </div>
</ApplyLayout>

</template>

<style lang="scss" scoped>
.next-btn {
  margin-top: 48px;
}
</style>
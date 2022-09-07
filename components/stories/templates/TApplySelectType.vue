<script setup lang="ts">
  import { ref, computed } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';
import MButton from '@/components/stories/molecules/MButton.vue';
import OApplySelectType from '@/components/stories/organisms/OApplySelectType.vue';
import { IStep1CorpItems, TransferType } from '@/types';

interface PropType {
  radio: number;
  corpItems: IStep1CorpItems[];
}
interface IState {
  radio: number;
  verified: boolean;
}
const props = withDefaults(defineProps<PropType>(), {});

const radio = ref<number>();
const verified = ref<boolean>(false);
radio.value = props.radio;

const selectTypeArgs: TransferType = {
  state: {
    radio: radio.value
  },
  propsData: {
    name: 'selectType',
    items: props.corpItems,
  }
}

const updateSelect = (data: IState) => {
  verified.value = data.verified;
  radio.value = data.radio;
}
</script>

<template>
<ApplyLayout>
  <OApplySelectType
    id="selectType"
    v-bind="selectTypeArgs"
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
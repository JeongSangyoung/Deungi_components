<script setup lang="ts">
import MRadioExpandGroup from '../molecules/MRadioExpandGroup.vue';

import { IStep1CorpItems } from '@/types';

import { ref } from 'vue';

interface PropType {
  state: {
    radio: number;
  }
  propsData: {
    name: string;
    items: IStep1CorpItems;
  }
}

const props = withDefaults(defineProps<PropType>(), {})

const radio = ref<number>();
radio.value = props.state.radio;

const emit = defineEmits(['verify']);
const changeValue = () => {
  emit('verify', {
      radio: radio.value,
      verified: radio.value !== -1 
    }
  );
}

</script>

<template>
<div>
  <p class="title-type-1">법인 유형을 선택하세요.</p>
  <MRadioExpandGroup 
    v-model="radio" 
    :name="propsData.name" 
    :items="propsData.items"
    @change="changeValue"
  />
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
</style>
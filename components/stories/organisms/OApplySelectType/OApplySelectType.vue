<script setup lang="ts">
import { watchEffect, ref } from 'vue';
import MRadioExpandGroup from '@/components/stories/molecules/MRadioExpandGroup/MRadioExpandGroup.vue';

import { IStep1CorpItem } from '@/types';
  
interface PropType {
  modelValue: number;
  name: string;
  items: IStep1CorpItem[];
}

const radio = ref<number>(-1);
const props = withDefaults(defineProps<PropType>(), {}) 

watchEffect(() => {
  radio.value = props.modelValue
})

const emit = defineEmits(['update:modelValue']);
const changeValue = (idx) => {
  emit('update:modelValue', idx);
}

</script>
  
<template>
<div>
  <p class="title-type-1">법인 유형을 선택하세요.</p>
  <MRadioExpandGroup
    v-model="radio" 
    :name="name"
    :items="items"
    @update:modelValue="changeValue"
  />
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
</style>
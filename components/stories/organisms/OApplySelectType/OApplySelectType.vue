<script setup lang="ts">
import MRadioExpandGroup from '@/components/stories/molecules/MRadioExpandGroup/MRadioExpandGroup.vue';

import { IStep1CorpItem } from '@/types';
  
interface PropType {
  radio: number;
  name: string;
  items: IStep1CorpItem[];
}
  
withDefaults(defineProps<PropType>(), {}) 

const emit = defineEmits(['update:radio']);
const changeValue = (idx) => {
  emit('update:radio', idx);
}

</script>
  
<template>
<div>
  {{ radio }}
  <p class="title-type-1">법인 유형을 선택하세요.</p>
  <MRadioExpandGroup
    :radio="radio" 
    :name="name" 
    :items="items"
    @update:radio="changeValue"
  />
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
</style>
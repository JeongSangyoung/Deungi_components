<script setup lang="ts">
import MRadioExpertGroup from '../molecules/MRadioExpertGroup.vue';

import { ref } from 'vue';

interface PropType {
  name: string;
  items: IExpertItems[];
}

interface IExpertItems {
  content: string;
  image?: string;
  expertName: string;
  expertCharge: string;
  expertContent: string; 
}
withDefaults(defineProps<PropType>(), {})

const radio = ref(-1);
</script>

<template>
<p class="title-type-1">법인 유형을 선택하세요.</p>
<MRadioExpertGroup v-model="radio" :name="name" :items="items" />
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
</style>
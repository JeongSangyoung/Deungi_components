<script setup lang="ts">
import MRadioExpandGroup from '../molecules/MRadioExpandGroup.vue';

import { IStep1CorpItems } from '@/types';

import { ref } from 'vue';

interface PropType {
  state: {
    radio: number;
  },
  propsData: {
    name: string;
    items: IStep1CorpItems;
  }
}

const props = withDefaults(defineProps<PropType>(), {})

const state = ref({
  radio: -1
})

state.value.radio = props.state.radio;

const emit = defineEmits(['select'])

</script>

<template>
<p class="title-type-1">법인 유형을 선택하세요.</p>
<MRadioExpandGroup 
  v-model="state.radio" 
  :name="propsData.name" 
  :items="propsData.items"
  @change="emit('select', )"
/>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
</style>
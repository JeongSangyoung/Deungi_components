<script setup lang="ts">
import { ref, watchEffect } from 'vue';

import MRadioButtonGroup from '../../molecules/MRadioButtonGroup/MRadioButtonGroup.vue';

interface PropType {
  modelValue: number;
  items: string[];
}

const props = withDefaults(defineProps<PropType>(), {});

const radio = ref<number>(-1);
const payitems = ref<string[]>([]);
watchEffect(() => {
  radio.value = props.modelValue;
  payitems.value = props.items;
});

const emit = defineEmits(['update:modelValue']);
const changeValue = (idx) => {
  emit('update:modelValue', idx);
}

</script>

<template>
<div>
  <p class="title-type-3">
    결제 방법
  </p>

  <MRadioButtonGroup
    v-model="radio"
    name="payby"
    :contents="payitems"
    @update:modelValue="changeValue"
  />

</div>
</template>

<style lang="scss" scoped>
.title-type-3 {
  margin-bottom: 24px;
}
</style>
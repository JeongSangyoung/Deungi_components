<script setup lang="ts">
import { watchEffect, ref } from 'vue';
import MInput from '../MInput/MInput.vue';
import { format2 } from './datePicker';

interface PropType {
  modelValue?: string;
  width?: string | number;
}

const props = withDefaults(defineProps<PropType>(), {});
const input = ref<string>('');
watchEffect(() => {
  input.value = props.modelValue;
})
const emit = defineEmits(['update:modelValue']);
const onChange = (value:string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    class="cinput"
  >
    <MInput
      :style="{
        width: props.width,
      }"
      v-model="input"
      :readonly="true"
      :place-holder="input"
      @input="onChange($event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.cinput {
  z-index: 0;
  position: relative;
  display: inline-block;
  color: grey;

  input {
    padding: 8px;
    font-size: 1rem;
    outline-color: #cfa5ff;
  }
  &:hover > input {
    outline-style: auto;
    outline-width: 1px;
    outline-color: #cfa5ff;
  }
}
</style>

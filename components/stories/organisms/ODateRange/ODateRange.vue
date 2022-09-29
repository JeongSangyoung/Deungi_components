<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue'; 
import MDatePicker from '@/components/stories/molecules/MDatePicker/MDatePicker.vue';

interface PropType {
  pickStart: string;
  pickEnd: string;
}
const props = withDefaults(defineProps<PropType>(), {});

const pickStart = ref<string>();
const pickEnd = ref<string>();

watchEffect(() => {
  pickStart.value = props.pickStart;
  pickEnd.value = props.pickEnd;
});
const emits = defineEmits(['update:pickStart', 'update:pickEnd']);
watch(pickStart, newValue => {
  if (newValue >= pickEnd.value) {
    pickEnd.value = newValue;
  }
  emits('update:pickStart', newValue)
});
watch(pickEnd, newValue => {
  emits('update:pickEnd', newValue)
});


</script>

<template>
<div class="pickers">
  <MDatePicker
    mode="start" 
    v-model:pick-start="pickStart" 
    v-model:pick-end="pickEnd"
  />
  <div class="pickers-center"> ~ </div>
  <MDatePicker 
    mode="end" 
    v-model:pick-start="pickStart" 
    v-model:pick-end="pickEnd"
  />
  
</div>

</template>

<style lang="scss" scoped>
.pickers {
  display: flex;
  align-items: center;

  &-center {
    margin: 0 8px;
  }
}
</style>
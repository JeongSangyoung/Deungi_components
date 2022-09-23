<script setup lang="ts">
import { ref } from 'vue'; 
import MDatePicker from '@/components/stories/molecules/MDatePicker/MDatePicker.vue';

const pickStart = ref<Date>(new Date());
const pickEnd = ref<Date>(new Date());

const emit = defineEmits(['update:start', 'update:end'])
const setStartTime = (date: Date) => {
  pickStart.value = date
  emit('update:start', pickStart.value)
  if (pickStart.value > pickEnd.value) {
    pickEnd.value = pickStart.value;
    emit('update:end', pickEnd.value)
  }
}
const setEndTime = (date) => {
  pickEnd.value = date
  emit('update:end', pickEnd.value)
}
</script>

<template>
<div class="pickers">
  <MDatePicker 
    mode="start" 
    :pick-start="pickStart" 
    :pick-end="pickEnd"
    @update:start="setStartTime" 
  />
  <div class="pickers-center"> ~ </div>
  <MDatePicker 
    mode="end" 
    :pick-start="pickStart" 
    :pick-end="pickEnd"
    @update:end="setEndTime"
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
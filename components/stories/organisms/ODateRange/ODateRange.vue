<script setup lang="ts">
import { ref, watchEffect } from 'vue'; 
import MDatePicker from '@/components/stories/molecules/MDatePicker/MDatePicker.vue';

interface PropType {
  pickStart: Date;
  pickEnd: Date;
}
const props = withDefaults(defineProps<PropType>(), {});

const pickStart = ref<Date>(new Date());
const pickEnd = ref<Date>(new Date());
const changeDateState = (mode, date: Date) => {
  if (mode === 'start') {
    pickStart.value.setFullYear(date.getFullYear())
    pickStart.value.setMonth(date.getMonth())
    pickStart.value.setDate(date.getDate())
    pickStart.value = date;
  } else if (mode === 'end') {
    pickEnd.value.setFullYear(date.getFullYear())
    pickEnd.value.setMonth(date.getMonth())
    pickEnd.value.setDate(date.getDate())
    pickEnd.value = date;
  }
}
watchEffect(() => {
  changeDateState('start', props.pickStart);
  changeDateState('end', props.pickEnd);
})

const emit = defineEmits(['update:pickStart', 'update:pickEnd'])
const setStartTime = (date: Date) => {
  changeDateState('start', date);
  emit('update:pickStart', pickStart.value)

  if (pickStart.value.getTime() >= pickEnd.value.getTime()) {
    changeDateState('end', pickStart.value);
    emit('update:pickEnd', pickEnd.value)
  }
}
const setEndTime = (date) => {
  changeDateState('end', date);
  emit('update:pickEnd', pickEnd.value)
}
</script>

<template>
<div class="pickers">
  {{ pickStart}} <br />
  {{ pickEnd }}
  <MDatePicker 
    mode="start" 
    :pick-start="pickStart" 
    :pick-end="pickEnd"
    @update:pickStart="setStartTime"
  />
  <div class="pickers-center"> ~ </div>
  <MDatePicker 
    mode="end" 
    :pick-start="pickStart" 
    :pick-end="pickEnd"
    @update:pickEnd="setEndTime"
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
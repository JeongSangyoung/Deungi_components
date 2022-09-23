<script setup lang="ts">
import ODatePicker from '@/components/stories/organisms/ODatePicker/ODatePicker.vue';

const pickStart = ref<Date>(new Date());
const pickEnd = ref<Date>(new Date());
console.log('why');
</script>

<template>
<div>
  gg
  <ODatePicker mode="start" :pick-start="pickStart" :pick-end="pickEnd"/>
</div>
</template>
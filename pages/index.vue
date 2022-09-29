<script setup lang="ts">
import ODatePicker from '@/components/stories/organisms/ODatePicker/ODatePicker.vue';
import CustomInput from '@/components/stories/molecules/MDatePicker/CustomInput.vue';
import test from '@/components/test/test.vue';
const pickStart = ref<Date>(new Date());
const pickEnd = ref<Date>(new Date());

const start = ref<string>('2022-01-01');
const end = ref<string>('2022-09-26');
const curDate = ref<string>();
const date = ref<string>('2022-09-24');

</script>

<template>
<div>
  <test mode="start" v-model:start="start" v-model:end="end" />
  <test mode="end" v-model:start="start" v-model:end="end" />

  <custom-input v-model="date"/>

  <button>Click</button>
</div>
</template>
<script setup lang="ts">
import { emit } from 'process';


interface PropType {
  mode?: string;
  date?: string;
  start: string;
  end: string;
}

const props = withDefaults(defineProps<PropType>(), {});

const date = ref<string>();
const start = ref<string>();
const end = ref<string>();


watchEffect(() => {
  start.value = props.start;
  end.value = props.end;
})

const emits = defineEmits(['update:start', 'update:end']);
watch(date, newValue => {
  if (props.mode === 'start') {
    emits('update:start', newValue);
  } else if (props.mode === 'end') {
    emits('update:end', newValue);
  }
})
</script>

<template>
<div>
  <div class="start">
    {{ start }}
  </div>
  <div class="end">
    {{ end }}
  </div>
  <div v-if="date">
  </div>
  <input v-model="date" type="date" id="start" name="trip-start">
</div>

</template>

<style lang="scss" scoped>
.start {
  background: green;
  font-size: 20px;
  padding: 20px;
}
.end {
  background: red;
  font-size: 20px;
  padding: 20px;
}
</style>
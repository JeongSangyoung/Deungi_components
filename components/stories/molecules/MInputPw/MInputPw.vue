<script setup lang="ts">
import { CSSProperties, computed, ref, watch, watchEffect } from 'vue';

interface PropType {
  modelValue?: string | number;
  maxlength: number | string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
}

const props = withDefaults(defineProps<PropType>(), {
  width: '',
  maxWidth: '',
  height: '',
})

</script>

<template>
<input type="password" />
</template>

<style lang="scss" scoped>

</style>
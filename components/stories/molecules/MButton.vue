<script setup lang="ts">
import { CSSProperties, computed } from 'vue';

interface PropType {
  rounded?: boolean;
  backgroundColor?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
}

const props = withDefaults(defineProps<PropType>(), {
  rounded: false,
  backgroundColor: '#19A29A',
  width: '',
  maxWidth: '',
  height: '',
})

const computedStyled = computed(() => {
  const style = {
        backgroundColor: props.backgroundColor,
      } as CSSProperties;
  if (props.width) style.width = props.width
  if (props.maxWidth) style.maxWidth = props.maxWidth
  if (props.height) style.height = props.height
  if (props.rounded) {
    style.borderRadius = '50vh'
  }
  return style;
})

const emit = defineEmits(['click'])

</script>

<template>
  <button
    class="mButton"
    :style="computedStyled"
    @click="emit('click')"
  >
    <slot ></slot>
  </button>
</template>

<style lang="scss" scoped>
.mButton {
  margin: 0;
  padding: 0.5rem 1rem;
  display: inline-block;
  border: none;
  cursor: pointer;
}
</style>
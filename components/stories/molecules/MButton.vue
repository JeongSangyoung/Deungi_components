<script setup lang="ts">
import { CSSProperties, computed } from 'vue';

interface PropType {
  rounded?: boolean;
  backgroundColor?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  pulse?: boolean;
}

const props = withDefaults(defineProps<PropType>(), {
  rounded: false,
  backgroundColor: '#19A29A',
  width: '',
  maxWidth: '',
  height: '',
  pulse: false,
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
    :class="{ 'mButton-pulse': pulse }"
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

  &-pulse {
    transform:scale(1);
    animation:pulse 2s infinite;
  }
}


@keyframes pulse {
  0% {
    -webkit-transform:scale(0.95);
    -ms-transform:scale(0.95);
    transform:scale(0.95);
    -webkit-box-shadow:0 0 0 0 rgba(57, 82, 179, 0.7);
    -ms-box-shadow:0 0 0 0 rgba(57, 82, 179, 0.7);
    box-shadow:0 0 0 0 rgba(57, 82, 179, 0.7);
  }
  70% {
    -webkit-transform:scale(1);
    -ms-transform:scale(1);
    transform:scale(1);
    -webkit-box-shadow:0 0 0 10px rgba(57, 82, 179, 0);
    -ms-box-shadow:0 0 0 10px rgba(57, 82, 179, 0);
    box-shadow:0 0 0 10px rgba(57, 82, 179, 0);
  }
  100% {
    -webkit-transform:scale(0.95);
    -ms-transform:scale(0.95);
    transform:scale(0.95);
    -webkit-box-shadow:0 0 0 0 rgba(57, 82, 179, 0);
    -ms-box-shadow:0 0 0 0 rgba(57, 82, 179, 0);
    box-shadow:0 0 0 0 rgba(57, 82, 179, 0);
  }
}
</style>
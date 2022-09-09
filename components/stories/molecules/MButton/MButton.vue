<script setup lang="ts">
import { CSSProperties, computed } from 'vue';

interface PropType {
  rounded?: boolean;
  backgroundColor?: string;
  color?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  pulse?: boolean;
  disabled?: boolean;
  dotted?: boolean;
}

const props = withDefaults(defineProps<PropType>(), {
  rounded: false,
  backgroundColor: '#3952B3',
  color: '#fff',
  width: '',
  maxWidth: '',
  height: '',
  pulse: false,
  disabled: false,
  dotted: false,
})

const computedStyled = computed(() => {
  const style = {
        backgroundColor: props.backgroundColor,
      } as CSSProperties;
  if (props.width) style.width = props.width
  if (props.maxWidth) style.maxWidth = props.maxWidth
  if (props.height) style.height = props.height
  if (props.color) style.color = props.color
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
    :class="{ 'mButton-pulse': pulse, 'mButton-disabled': disabled, 'mButton-dotted': dotted }"
    :style="computedStyled"
    @click="emit('click')"
    :disabled="disabled"
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
  font-family: 'NotoSans';

  &-pulse {
    transform:scale(1);
    animation:pulse 2s infinite;
  }

  &-disabled {
    cursor: not-allowed;
    background: #ccc !important;
  }

  &-dotted {
    background: #fff !important;
    color: black !important;
    border: 2px dotted #b7b7b7;
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
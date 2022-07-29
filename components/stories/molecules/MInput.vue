<script setup lang="ts">
import { CSSProperties, computed } from 'vue';

interface PropType {
  rounded?: boolean;
  placeHolder?: string;
  unit?: string;
  readonly?: boolean;
  prevImage?: string;
  maxlength?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}

const props = withDefaults(defineProps<PropType>(), {
  rounded: false,
  placeHolder: '',
  unit: '',
  readonly: false,
  prevImage: '',
  maxlength: 24,
  width: '',
  maxWidth: '',
  height: '',
})

const computedStyled = computed(() => {
  const style = {} as CSSProperties;

  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  if (props.rounded) {
    style.borderRadius = '50vh'
  }

  return style;
})

</script>

<template>
  <div class="mInput" :style="computedStyled">
    <img :src="prevImage" />
    <input  
      type="text" 
      :placeholder="placeHolder"
      :maxlength="maxlength"
      :readonly="readonly"
      :style="{
        borderRadius: rounded ? '50vh' : '',
        padding: prevImage ? 
            rounded ? '0 30px 0 70px': '0 20px 0 70px' :
            rounded ? '0 30px' : '0 20px'
      }"
    />
    <span class="mInput-unit">{{ unit }}</span>
  </div>
</template>

<style lang="scss" scoped>
.mInput {
  position: relative;

  img {
    width: 30px;
    position :absolute;
    top: 50%;
    left: 30px;
    transform: translate(0, -50%);
  }

  input {
    border: 1px solid #e9e9e9;
    box-sizing: border-box;
    // padding: 0 20px;
    height: 70px; 
    font-size: 20px;
    outline: none;
    width: 100%;

    &:read-only {
      background: #eee;
      cursor: default;
    }

  }

  &-unit {
    position: absolute;
    top: 24px;
    right: 20px;
    font-size: 16px;
    color: #6d7ab2;
  }
}
</style>
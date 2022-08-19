<script setup lang="ts">
import { CSSProperties, computed, ref } from 'vue';

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
  type?: 'text' | 'number';
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
  type: 'text',
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

const value = ref('');

const emit = defineEmits(['update:modelValue']);

const onlyNumber = ($event) => {
  if (props.type === 'number') {
    let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
     if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
        $event.preventDefault();
     }
  }
}

</script>

<template>
<div class="mInput" :style="computedStyled">
  <img v-if="prevImage" :src="prevImage" />
  <input
    v-model="value"
    type="text" 
    :placeholder="placeHolder"
    :maxLength="maxlength"
    :readonly="readonly"
    :style="{
      borderRadius: rounded ? '50vh' : '',
      padding: prevImage ? 
          rounded ? '0 30px 0 70px': '0 20px 0 70px' :
          rounded ? '0 30px' : '0 20px'
    }"
    @input="emit('update:modelValue', value)"
    @keypress="onlyNumber($event)"
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
    height: 70px;
    font-size: 20px;
    outline: none;
    width: 100%;
    letter-spacing: -1px;

    &:read-only {
      background: #eee;
      cursor: default;
    }

    @include smAndDown {
      height: 62px;
      font-size: 18px;
    }

    @include tiny {
      height: 52px;
      font-size: 16px;
    }

  }

  &-unit {
    position: absolute;
    top: 24px;
    right: 20px;
    font-size: 16px;
    color: #6d7ab2;

    @include mdAndDown {
      top: 20px;
      right: 18px;
    }

    @include xs {
      top: 20px;
      right: 18px;
      font-size: 12px;
    }
  }
}
</style>
<script setup lang="ts">
import { CSSProperties, computed, ref } from 'vue';

interface PropType {
  name: string;
  checked: boolean;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}
const props = withDefaults(defineProps<PropType>(), {

})
const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  return style;
})

const emit = defineEmits(['update:modelValue'])

const isChecked = ref(false);
if (props.checked) { isChecked.value = true; }

</script>

<template>
<div class="mLabel" :style="computedStyled">
  <input 
    v-model="isChecked"
    type="checkbox"
    :id="name" 
    :checked="checked"
  />
  <label
    :for="name"
    @click="emit('update:modelValue', isChecked)"
    class="mRButton"
  >
    <slot></slot>
  </label>
</div>  

</template>

<style lang="scss" scoped>
.mLabel {
  position: relative;
  width: 100%;
  display: block;
  border: 1px solid #e9e9e9;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #f5faff;
  }

  label {
    display: block;
    position: relative;
    border: 1px solid #e9e9e9;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #f5faff;
    }

    padding: 24px 10px 24px 72px;
  
    @include smAndDown {
      padding: 18px 8px 18px 60px;
    }
    @include tiny {
      padding: 18px 8px 18px 44px;
    }
  }
}

input[type="checkbox"] {
  display: none;

  &:checked {
    + .mRButton {
      border: 1px solid #ecf0ff;
      background: #ecf0ff;
      transition: 0.2s;
    }

    + .mRButton:before {
      border: 1px solid $color-basic;
      background: $color-basic;
    }
  }
}

.mRButton:before {
  content: "";
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 22px;
  box-sizing: border-box;
  border-radius: 50%;
  background: #d0d0d0;
  vertical-align: -3px;
  transform: translate(0, -50%);
  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
  -o-transition: 0.1s;
  transition: 0.1s;

  @include smAndDown {
    width: 26px;
    height: 26px;
    left: 18px;
  }
  @include tiny {
    width: 20px;
    height: 20px;
    left: 14px;
  }
}

.mRButton:after {
  content: "";
  width: 12px;
  height: 6px;
  position: absolute;
  top: 50%;
  left: 27px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  margin-top: -8px;
  -webkit-transform: rotate(-45deg) translate(0, 50%);
  -ms-transform: rotate(-45deg) translate(0, 50%);
  transform: rotate(-45deg) translate(0, 50%);

  @include smAndDown {
    width: 10px;
    height: 6px;
    left: 23px;
  }
  @include tiny {
    width: 7px;
    height: 5px;
    left: 18px;
  }
}

</style>
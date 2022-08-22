<script setup lang="ts">
import { CSSProperties, computed } from 'vue';

interface PropType {
  placeHolder: string;
  checker: {
    name: string;
    more: string;
  }[];
  maxlength?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}

const props = withDefaults(defineProps<PropType>(), {
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
  return style;
})

</script>

<template>
<div class="mInputSel" :style="computedStyled">
  <input
    type="text" 
    :placeholder="placeHolder"
    :maxlength="maxlength"
  />
  
  </div>
</template>

<style lang="scss" scoped>
.mInputSel {
  position: relative;
}
</style>
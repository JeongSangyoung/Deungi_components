<script setup lang="ts">
import { CSSProperties, computed, ref } from 'vue';
import MCheckGroup from './MCheckGroup.vue';

interface PropType {
  placeHolder: string;
  checkItems: ICheckItem[];
  maxlength?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}

interface ICheckItem {
  content: string;
  name: string;
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

const emit = defineEmits(['inputcheck']);
const text = ref('');
const checkArray = ref(new Array(props.checkItems.length).fill(false))

const textChanged = (value) => {
  text.value = value;
  emit('inputcheck', { text: text.value, check: checkArray.value })
}

const checkChanged = (value) => {
  value.forEach((v, idx) => {
    checkArray.value[idx] = v
  })
  emit('inputcheck', { text: text.value, check: checkArray.value })
}

</script>

<template>
<div class="mInputSelection" :style="computedStyled">
  <input
    type="text" 
    :placeholder="placeHolder"
    :maxlength="maxlength"
    @input="textChanged($event.target.value)"
  />
  
  <div class="mInputSelection-check">
    <MCheckGroup 
      :items="checkItems" 
      :set-inline="true" 
      @check="checkChanged"
    />
  </div>
  </div>
</template>

<style lang="scss" scoped>
.mInputSelection {
  position: relative;

  input {
    border: 1px solid #e9e9e9;
    box-sizing: border-box;
    padding: 0 20px;
    height: 70px; 
    font-size: 20px;
    outline: none;
    width: 100%;
  }

  &-check {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
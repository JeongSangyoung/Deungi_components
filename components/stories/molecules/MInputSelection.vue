<script setup lang="ts">
import { CSSProperties, computed, ref, watch } from 'vue';
import MCheckGroup from './MCheckGroup.vue';

interface PropType {
  placeHolder: string;
  checkItems: ICheckItem[];
  name: string;
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

const text = ref();
const checkArray = ref()

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  return style;
})

const emit = defineEmits(['update:modelValue']);
watch(text, _ => {
  emit('update:modelValue', { text: text.value, check: checkArray.value })
})
watch(checkArray, _ => {
  emit('update:modelValue', { text: text.value, check: checkArray.value })
}, { deep: true })

</script>

<template>
<div class="mInputSelection" :style="computedStyled">
  <input
    type="text"
    :placeholder="placeHolder"
    :maxlength="maxlength"
    v-model="text"
  />
  <div class="mInputSelection-check">
    <MCheckGroup
      :items="checkItems"
      :set-inline="true"
      v-model="checkArray"
      :name="name"
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

    @include smAndDown {
      height: 62px;
      font-size: 18px;
    }

    @include xs {
      height: 52px;
      font-size: 16px;
    }
  }

  &-check {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    @include xs {
      position: relative;
      right: unset;
      top: unset;
      transform: unset;
      margin-top: 8px;
    }
  }
}
</style>
<script setup lang="ts">
import { CSSProperties, computed, ref, watch, watchEffect } from 'vue';


interface PropType {
  modelValue: number;
  contents: string[];
  placeholder?: string;
  maxlength?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}

const props = withDefaults(defineProps<PropType>(), {});

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  return style;
})

const selection = ref<number>();

watchEffect(() => {
  selection.value = props.modelValue;
});

const emit = defineEmits(['update:modelValue'])

</script>

<template>
<div class="select" :style="computedStyled">
  <select
    v-model="selection"
    @change="emit('update:modelValue', selection)"
    >
    <option :value="0" selected>{{ placeholder }}</option>
    <option 
      v-for="(content, idx) in contents"
      :key="content"
      :value="idx + 1"
      >{{ content }}</option>
  </select>
  <div class="select-arrow"></div>
</div>

</template>

<style lang="scss" scoped>
.select {
  position: relative;
  min-width: 100px;
}
select {
  // height: 32px;
  padding: 0 40px 0 12px;
  border: 1px solid #e9e9e9;
  background-size: 24px auto;
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  position: relative;
  width: 100%;
  height: 62px;
  font-size: 20px;

  @include smAndDown {
      height: 52px;
      font-size: 18px;
    }

    @include tiny {
      height: 44px;
      font-size: 16px;
    }

  @include xs {
    padding: 0 24px 0 8px; 
  }

  &:disabled {
    cursor: not-allowed;
    background: #ccc;
  }

  option {
    padding: 6px 0;
  }
}

select::-ms-expand {
  display : none ;
}
.select-arrow {
  position: absolute;
  top: calc(50% - 3px);
  right: 15px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-style :solid;
  border-width: 8px 5px 0 5px;
  border-color: #999 transparent transparent transparent;
}
</style>
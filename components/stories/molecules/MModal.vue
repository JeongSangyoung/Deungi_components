<script setup lang="ts">
import { ref, computed, CSSProperties } from 'vue';
interface PropType {
  width?: string;
  maxWidth?: string;
  height?: string;
}

const props = withDefaults(defineProps<PropType>(), {
  width: '',
  maxWidth: '',
  height: '',
})

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = props.width
  if (props.maxWidth) style.maxWidth = props.maxWidth
  if (props.height) style.height = props.height
  return style;
})

const isShow = ref(false);
const toggleShow = () => { isShow.value = !isShow.value }
</script>

<template>
<div>
  <div class="mModal-activator">
    <slot name="activator" :on="{ click: toggleShow }" ></slot>
  </div>
  
  <div v-if="isShow" class="mModal">
    <div class="mModal-content" :style="computedStyled">
      <slot name="content" :on="{ click: toggleShow }"></slot>
      <button type="button" class="mModal-close" @click="toggleShow"></button>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.mModal {
  z-index: 10;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    position: relative;
    background: #fff;
    margin: auto;
    padding: 20px;
    padding-top: 40px;
    // min-width: 500px;
  }

  &-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 66px;
    height: 66px;
    background: url('https://deungi24.com/img/btn_pop_close.png') no-repeat;
    background-size: 66px auto;
    padding: 0;
    margin: 0;
    z-index: 11;
    text-indent: -9999px;
    cursor: pointer;
    border: none;
  }
}
</style>
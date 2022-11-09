<script setup lang="ts">
import { ref } from 'vue';

const isShow = ref(false);

const toggleShow = () => {
  isShow.value = !isShow.value
}
</script>

<template>

<div class="mQuestionIcon" @click="toggleShow">
  <div v-show="isShow" class="mQuestionIcon-content pa-2">
    <slot></slot>
  </div>
</div>
</template>

<style lang="scss" scoped>
.mQuestionIcon {
  position: relative;
  text-align: center;
  background-color: $color-basic;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 14px;
  line-height: 26px;
  cursor: pointer;
  
  &:before {
    content: '?';
    position: relative;
    font-weight: bold;
    color: #fff;
    top: -2px;
  }
  
  &-content {
    z-index: 2;
    text-align: left;
    background-color: #333;
    position: absolute;
    // transform: translateX(calc(-100% + 24px));
    // width: 500px;
    transition: .5s all;
    color: white;
    padding: 12px;
    @include xs {
      
    }
  }

}
</style>
<script setup lang="ts">
import { ref } from 'vue';

const isShow = ref(false);

</script>

<template>
<div class="mFold-header" :class="{ 'mFold-active': isShow }" @click="isShow = !isShow">
  <div class="mFold-accessory"></div>
  <div class="mFold-title">
    <slot name="header"></slot>
  </div>
  <!-- <div class="mFold-v" :class="{ 'mFold-v-active': isShow }"></div> -->
</div>
<div v-show="isShow" class="mFold-content" >
  <slot name="content"></slot>
</div>
</template>

<style lang="scss" scoped>
.mFold-title {
  padding-left: 24px;
  padding-right: 40px;
}
.mFold-header {
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    top: 10px;
    right: 10px;
    width: 19px;
    height: 19px;
    display: block;
    position: absolute;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
    transform: rotate(45deg);
    transition:.2s;
  }
}
.mFold-active {
  &:after {
    top: 16px;
    transform: rotate(-135deg);
  }
}
.mFold-accessory {
  position: absolute;
  top: 6px;
  width: 6px;
  height: 80%;
  clear: both;
  background: #3a52b4;
  transform: translateY(-10%);
  // .list-type-8 > li.active:before{top:26px;transform:rotate(-135deg);}
}
</style>
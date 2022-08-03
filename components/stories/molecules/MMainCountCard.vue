<script setup lang="ts">
interface PropType {
  image: string;
}
</script>

<template>
<div class="mainCountCard">
  <div class="mainCountCard-header">
    <slot name="header"></slot>
  </div>

  <div class="mainCountCard-content">
    <slot name="content"></slot>
  </div>

  <div class="mainCountCard-desc">
    <slot name="description"></slot>
  </div>
</div>
</template>

<style lang="scss" scoped>
.mainCountCard {
  font-family: 'GmarketSans';
}
</style>
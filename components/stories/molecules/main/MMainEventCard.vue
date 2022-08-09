<script setup lang="ts">

</script>

<template>
<div class="mEvent">
  <div class="mEvent-header">
    <slot name="header"></slot>
  </div>

  <div class="mEvent-content">
    <slot name="content"></slot>
  </div>
</div>
</template>

<style lang="scss" scoped>
.mEvent {
  max-width: 270px;
  &-header {
    background: #3952b3;
    color: #fff;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    font-weight: normal;
  }

  &-content {
    padding: 20px;
    background: #fff;
  }
}
</style>
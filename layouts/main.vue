<script setup lang="ts">
import OMainHeader from '@/components/stories/organisms/OMainHeader/OMainHeader.vue';
import OMainFooter from '@/components/stories/organisms/OMainFooter/OMainFooter.vue';

</script>

<template>
<div>
  <div id="container">
    <OMainHeader id="header"/>
    <div id="content">
      <slot></slot>
    </div>
  </div>
  <OMainFooter id="footer" />
</div>
</template>

<style lang="scss" scoped>
#container {
  display: flex;
  width: 100%;

  @include smAndDown {
    flex-direction: column;
  }
}
#header {
  @include smAndUp {
    width: 32%;
  }
  @include smAndDown {
    width: 100%;
  }
}
#content {
 @include smAndUp {
    width: 68%;
  }
  @include smAndDown {
    width: 100%;
  }
  @include xl {
    width: calc(100% - 640px);
  }
}
</style>
<script setup lang="ts">
import OAdminMenu from '@/components/stories/organisms/OAdminMenu/OAdminMenu.vue';

</script>

<template>
<div id="admin">
  <div id="admin-menu">
    <OAdminMenu />
  </div>

  <div id="admin-board">
    <slot></slot>
  </div>
</div>
</template>

<style lang="scss" scoped>

#admin {
  display :flex;
  width: 100%;

  &-menu {
    width: 20%;
    @include mdAndUp {
      // min-width: 160px;
      max-width: 200px;
    }
    height: 100%;
  }

  &-board {
    padding: 12px 24px;
    
  }
}
</style>
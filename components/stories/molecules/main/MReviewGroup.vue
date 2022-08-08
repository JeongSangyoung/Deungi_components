<script setup lang="ts">
interface PropType {
  image: string;
  content: string;
  author: string;
}

withDefaults(defineProps<PropType>(), {})

</script>

<template>
<div class="mReview">
  <div class="mReview-wrap">
    <div class="mReview-icon">
      <img src="https://deungi24.com/img/bg_user_pc.png" />
    </div>
  
    <div class="mReview-content">
      {{ content }}
    </div>
  
    <div class="mReview-author">
      {{ author }}
    </div>
  </div>
  <div class="mReview-image">
    <img :src="image" />
  </div>
</div>
</template>

<style lang="scss" scoped>
.mReview {
  list-style: none;
  padding: 28px;
  display: flex;
  word-break: keep-all;
}
.mReview {

  &-wrap {
    width: calc(100% - 95px);
  }
  &-content {
    font-size: 17px;
    letter-spacing: -1.2px;
    margin-bottom: 8px;
    color: #333333;
    padding-right: 12px;
  }

  &-author {
    font-size: 12px;
    letter-spacing: -0.5px;
    color: #999999;
  }
}

.mReview-image {
  width: 95px;
  height: 95px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
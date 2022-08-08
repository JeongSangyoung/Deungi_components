<script setup lang="ts">
interface PropType {
  header: string;
  contentColor?: string;
  contentCount: string;
  contentUnit: string;
  description: string;
  image: string;
}

withDefaults(defineProps<PropType>(), {
  contentColor: '#333',
})
</script>

<template>
<div 
  class="mainCountCard" 
  :style="{ background: `#fff url(${image}) no-repeat right bottom`}"
>
  <div class="mainCountCard-header">
    {{ header }}
  </div>

  <div class="mainCountCard-content" :style="{ color: contentColor }">
    <span>
      {{ contentCount }} 
    </span>
    <span>
      {{ contentUnit }}
    </span>
  </div>

  <div class="mainCountCard-desc">
    <p>{{ description }}</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.mainCountCard {
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  flex: 1;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  text-align: center;
  font-family: 'GmarketSans';

  &-header {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -2.5px;
    @include tabletAndMobile {
      font-size: 20px;
    }
  }

  &-content {
    font-weight:bold;
    letter-spacing: -2.2px;
    padding: 12px 0;
    span:nth-child(1) {
      font-size: 52px;
      @include tabletAndMobile {
        font-size: 40px;
      }
    }
    span:nth-child(2) {
      font-size: 32px; 
    }
  }

  &-desc {
    color: #333;
    border-top: 1px solid #ccc;
    margin-top: 5px;
    padding-top: 20px;
    font-size: 17px;
    letter-spacing: -2px;
  }
}
</style>
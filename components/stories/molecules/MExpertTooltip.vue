<script setup lang="ts">
interface PropType {
  image?: string;
  name: string;
  charge: string;
}

 withDefaults(defineProps<PropType>(), {
  image: 'https://deungi24.com/img/illu_2.png',
})
</script>

<template>
  <div class="expertTooltip">
    <div class="eProfile">
      <div class="eProfile-wrap">
        <img :src="image" />
      </div>
      <p class="eProfile-name">{{ name }}</p>
      <p class="eProfile-charge">{{ charge }}</p>
    </div>

    <div class="eContent">
      <div class="eContent-ballon">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.expertTooltip {
  display: block;
}
/* 프로필 이미지 */
.eProfile {
  float: left;
  text-align: center;
  padding-left: 21px;

  &-wrap {
    width: 84px;
    height: 84px;
    position: relative;
  }

  &-wrap img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%,-50%);
  }
  
  &-name {
    font-family: 'GmarketSans';
    color: #3a52b4;
    font-size: 16px;
    font-weight: bold;
    font-family: 'GmarketSans';
    margin-top: 4px;
    margin-bottom: 0px;
  }

  &-charge {
    font-size: 16px;
    margin-top: 4px;
    margin-bottom: 0px;
    color: #333;
  }
}

.eContent {
  float: right;
  width: calc(100% - 150px);

  &-ballon {
    border-radius: 18px;
    padding: 20px 30px;
    position: relative;
    background: #f5f5f5;
    min-height: 100px
  }

  &-ballon:after {
    top: 55px;
    left: -24px;
    width: 24px;
    height: 22px;
    background: url('https://deungi24.com/img/ico_balloon.png') no-repeat;
    background-size: 24px auto;
    content: '';
    clear: both;
    display: block;
    position: absolute;
  }
}
</style>
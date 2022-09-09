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
  display: flex;
}
/* 프로필 이미지 */
.eProfile {
  text-align: center;
  padding-left: 20px;
  margin-right: 30px;

  @include xs {
    padding-left: 12px;
    margin-right: 24px;
  }

  @include tiny {
    padding-left: 0;
    margin-right: 12px;
  }

  &-wrap {
    width: 84px;
    height: 84px;
    position: relative;

    @include xs {
      width: 70px;
      height: 70px;
    }
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
    margin-top: 4px;
    margin-bottom: 0px;

    @include mdAndDown {
      font-size: 14px;
    }
  }

  &-charge {
    font-size: 16px;
    margin-bottom: 0px;
    color: #333;
    letter-spacing: -1px;

    @include mdAndDown {
      font-size: 14px;
    }
  }
}

.eContent {
  &-ballon {
    border-radius: 18px;
    padding: 20px 30px;
    position: relative;
    background: #f5f5f5;
    min-height: 100px;

    @include mdAndDown {
      padding: 16px 20px;
    }

    @include xs {
      padding: 8px 12px;
    }
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

    @include tiny {
      display: none;
    }
  }
}

</style>
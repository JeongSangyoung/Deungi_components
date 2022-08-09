<script setup lang="ts">
import MReviewGroup from '@/components/stories/molecules/main/MReviewGroup.vue';

interface PropType {
  items: ICardItem[];
}

interface ICardItem {
  image: string;
  content: string;
  author: string;
}

withDefaults(defineProps<PropType>(), {})
</script>

<template>
<div class="main">
  <div class="main-wrap">
    
    <div class="main-title">
      <div>오늘 하루만 벌써<br />
        <span style="color: yellow;"><b>194개 </b></span>
        <b>법인이 설립 되었습니다.</b>
      </div>
    </div>

    <div class="main-cards">
      <MReviewGroup
        v-for="item in items"
        :key="item.author"
        v-bind="item"
        class="main-card"
      />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.main {
  background: url('https://deungi24.com/img/main_slider_4.gif') no-repeat center 0px;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);

  @include mdAndUp {
    padding: 0 40px;
  }

  @include smAndDown {
    padding: 60px 12px;
  }
}
.main-wrap {
  max-width: 990px;
  width: 100%;
  display: flex;

  @include mdAndDown {
    flex-direction: column;
    align-items: center;
  }
}
.main-title {
  font-family: "NotoSans";
  font-size: 42px;
  color: #fff;
  letter-spacing: -2px;
  word-break: keep-all;
  display: flex;
  align-items: center;

  @include md {
    font-size: 32px;
  }
  @include smAndDown {
    font-size: 24px;
  }
  @include mdAndDown {
    text-align: center;
    margin-bottom: 48px;
  }
}
.main-cards {
  padding-left: 20px;

  @include mdAndDown {
    padding-left: 0;
  }
}
.main-card {
  @include mdAndUp {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: unset;
    }
  }

  @include mdAndDown {
    max-width: 600px;
    width: 100%;
    margin-bottom: 16px;
  }
}
</style>
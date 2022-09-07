<script setup lang="ts">
import MMainCountCard from '@/components/stories/molecules/MMainCountCard.vue';

interface PropType {
  items: ICardItem[];
}

interface ICardItem {
  header: string;
  contentColor?: string;
  contentCount: string;
  contentUnit: string;
  description: string;
  image: string;
}

withDefaults(defineProps<PropType>(), {})
</script>

<template>
<div id="main">
  <div class="main-wrap">
    <p class="main-title">오늘만 벌써 <span style="color: red;"><b>120명</b></span>이 <b>법인설립 신청완료!</b></p>
    <div class="main-cards">
      <MMainCountCard
        v-for="(item, item_idx) in items"
        :key="item.header"
        v-bind="item"
        class="main-card"
      />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
#main {
  background: url('https://deungi24.com/img/main_slider_1.gif') no-repeat center 0px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-height: calc(100vh - 70px);

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
}
.main-title {
  font-family: "NotoSans";
  font-size: 42px;
  color: #fff;
  letter-spacing: -2px;
  text-align: center;
  margin-bottom: 48px;
  word-break: keep-all;

  @include md {
    font-size: 32px;
  }
  @include smAndDown {
    font-size: 24px;
  }
  @include mdAndDown {
    margin-bottom: 48px;
  }
}
.main-cards {
  display: flex;
  @include mdAndDown {
    flex-direction: column;
    align-items: center;
  }
}
.main-card {
  @include lgAndUp {
    margin-right: 24px;
    &:last-child {
      margin-right: unset;
    }
  }

  @include mdAndDown {
    max-width: 500px;
    width: 100%;
    margin-bottom: 24px;
  }
}
</style>
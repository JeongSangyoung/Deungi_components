<script setup lang="ts">
import MMainCountCard from '@/components/stories/molecules/main/MMainCountCard.vue';

interface PropType {
  backgroundImage: string;
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
<div id="main" :style="{ background: `url(${backgroundImage}) no-repeat center` }">
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
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @include tabletAndMobile {
    min-height: 150vh;
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
  margin-bottom: 78px;
  word-break: keep-all;

  @include tablet {
    font-size: 32px;
  }
  @include mobile {
    font-size: 24px;
  }
  @include tabletAndMobile {
    margin-bottom: 48px;
  }
}
.main-cards {
  display: flex;
  @include tabletAndMobile {
    flex-direction: column;
    align-items: center;
  }
}
.main-card {
  @include desktop {
    margin-right: 28px;
    &:last-child {
      margin-right: unset;
    }
  }

  @include tabletAndMobile {
    max-width: 500px;
    width: 100%;
    margin-bottom: 24px;
  }
}
</style>
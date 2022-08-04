<script setup lang="ts">
import { CSSProperties, computed } from 'vue';

interface PropType {
  image?: string;
  name: string;
  charge: string;
  chips?: string[] | [];
  backgroundColor?: string;
  state?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
}

const props = withDefaults(defineProps<PropType>(), {
  image: 'https://deungi24.com/img/ico_list1.png',
  chips: () => [],
  backgroundColor: 'transparent',
  state: '다음에 입력',
  width: '',
  maxWidth: '',
  height: '',
});

const computedStyled = computed(() => {
  const style = {
    backgroundColor: props.backgroundColor,
  } as CSSProperties;
  if (props.width) style.width = props.width
  if (props.maxWidth) style.maxWidth = props.maxWidth
  if (props.height) style.height = props.height
  return style;
})

const emit = defineEmits(['remove'])

</script>

<template>
<div class="exeCard" :style="computedStyled">
  <!-- 1  -->
  <div class="exeCard-profile">
    <img :src="image" />
  </div>
  <div class="exeCard-content">
    <div class="exeCard-content__div">
      <h3>{{ name }}</h3>
      <ul v-if="chips.length">
        <li v-for="chip in chips" :key="chip">
          {{ chip }}
        </li>
      </ul>
    </div>
    <!-- 2 -->
    <div class="exeCard-content__div">
      <div>{{ charge }}</div>
      <div style="margin: 0 12px;">|</div>
      <strong>{{ state }}</strong>
    </div>
  </div>
  <!-- 3 -->
  <div class="exeCard-close" @click="emit('remove')">
    <div class="exeCard-close__btn"></div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.exeCard {
  width: 100%;
  height: 100px;
  display: flex;

  &-profile {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 76px;
    }
  }

  &-content {
    width: calc(100% - 140px);

    &__div {
      display: flex;
      align-items: center;
    }

    ul {
      margin: 0;
      margin-left: 4px;
      padding: 0;
    }
    li {
      list-style: none;
      float: left;
      font-size: 14px;
      border: 1px solid #333;
      border-radius: 20px;
      padding: 2px 13px;
      margin-left: 8px;
    }
  }

  &-close {
    width: 40px;

    &__btn {
      display: inline-block;
      cursor: pointer;
      &:after {
        display: inline-block;
        text-align: center;
        content: "\00d7";
        font-size: 40px;
        line-height: 40px;
        width: 40px;
      }
    }
  }

}
</style>
<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface PropType {
  items: { name: string, path: string }[];
  width?: string;
  maxWidth?: string;
  height?: string;
}

const props = withDefaults(defineProps<PropType>(), {
  width: '',
  maxWidth: '',
  height: '',
});

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = props.width
  if (props.maxWidth) style.maxWidth = props.maxWidth
  if (props.height) style.height = props.height
  return style;
})

const route = useRoute();
const router = useRouter();

const changeStyle = (idx: number) => {
  const routeIdx = props.items.findIndex(item => {
    return item.path === route.path
  });
  return routeIdx === idx
}
</script>

<template>
<ul class="maintab" :style="computedStyled">
  <li 
    v-for="(item, idx) in items" 
    :key="item.name"
    @click="router.push(item.path)"
    :style="{ width: (100 / items.length) + '%'}"
    :class="{ 'maintab-bl': idx !== 0, 'maintab-checked': changeStyle(idx) }"
  >
    <a>{{ item.name }}</a>
    <br />
  </li>
</ul> 
</template>

<style lang="scss" scoped>
.maintab {
  margin: 0;
  padding: 0;
  display: flex;
  font-family: 'NotoSans';

  @include xs {
    font-size: 14px;
    letter-spacing: -1px;
  }

  li {
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 4px solid #3952b3;
    border-collapse: separate;
    cursor: pointer;
    text-align: center;
    color: #333;
    padding: 22px 0;

    @include smAndDown {
      border-top: 1px solid #e8e8e8;
    }
    @include xs {
      padding: 18px 8px;
    }
  }

  &-bl {
    border-left: 1px solid #efefef;
  }

  &-checked {
    background: #3952b3 !important;
    color: white !important;
  }

}
</style>
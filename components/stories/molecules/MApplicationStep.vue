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

const stepStatus = (idx: number) => {
  const routeIdx = props.items.findIndex(item => {
    return item.path === route.path
  });
  if (routeIdx === idx) return 'appStep-on'
  else if (routeIdx > idx) return 'appStep-end'
  return 'appStep-not'
}

</script>

<template>
<ul class="appStep">
  <li
    v-for="(item, idx) in items"
    :key="item.name"
    @click="router.push(item.path)"
  >
    <div class="appStep-circle" :class="stepStatus(idx)">
      <div class="appStep-check">
        <span class="appStep-number">{{ idx + 1}}</span>
      </div>
    </div>
    <div :style="{
      fontWeight: stepStatus(idx) === 'appStep-on' ? 'bold' : ''
    }">
      {{ item.name }}
    </div>
  </li>
</ul>
</template>

<style lang="scss" scoped>
.appStep {
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    flex: 1;

    &:after {
      position: absolute;
      content: "";
      border-bottom: 3px solid #D5D5D5;
      width: 100%;
      top: 25px;
      left: 50%;
    }

    .appStep-end:after {
      position: absolute;
      content: "";
      border-bottom: 3px solid #3952b3;
      width: 100%;
      top: 25px;
      left: 50%;
    }

    &:first-child:before {
      content: none;
    }
    &:last-child:after {
      content: none;
    }
  }

  // 원형
  &-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 18px;
    }
    z-index: 5;
  }

  // 현재위치
  &-on {
    background: #3952b3;
    .appStep-check {
      width: 40px;
      height: 40px;
      position: absolute;
      background: #3952b3;
      border-radius: 50%;
      border: 2px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      color: white;
    }
  }

  // 지난위치
  &-end {
    background: #3952b3;

    .appStep-check {
      z-index: 5;
      margin: 0;
      display: block;
      width: 14px;
      height: 8px;
      position: absolute;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      -webkit-transform: rotate(-45deg) translate(0, 50%);
      -ms-transform: rotate(-45deg) translate(0, 50%);
      transform: rotate(-45deg);
    }
    span {
      display: none;
    }
  }

  // 나중위치
  &-not {
    background: #D5D5D5;

    .appStep-check {
      width: 44px;
      height: 44px;
      position: absolute;
      background: #ffffff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      color: #D5D5D5;
    }
  }
}
</style>
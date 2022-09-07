<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface PropType {
  items: { name: string, path: string }[];
  selecteIndex?: string | number;
  width?: string;
  maxWidth?: string;
  height?: string;
}

const props = withDefaults(defineProps<PropType>(), {
  width: '',
  maxWidth: '',
  height: '',
  selecteIndex: 1,
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

const routeTo = (path) => {
  console.log(path)
  router.push(path);
}
</script>

<template>
<ul class="appStep">
  <li
    v-for="(item, idx) in items"
    :key="item.name"
    @click="routeTo(item.path)"
  >
    <div class="appStep-circle" :class="stepStatus(idx)">
      <div class="appStep-check">
        <span class="appStep-number">{{ idx + 1 }}</span>
      </div>
    </div>
    <div :style="{
      fontWeight: stepStatus(idx) === 'appStep-on' ? 'bold' : '',
    }" class="appStep-name">
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
  text-align: center;

  @include xs {
    font-size: 14px;
  }

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

      @include xs {
        top: 15px;
      }
    }

    .appStep-end:after {
      position: absolute;
      content: "";
      border-bottom: 3px solid $color-basic;
      width: 100%;
      top: 25px;
      left: 50%;

      @include xs {
        top: 15px;
      }
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

    @include xs {
      width: 30px;
      height: 30px;
    }
    span {
      font-weight: bold;
      font-size: 18px;
    }
    z-index: 5;
  }

  &-number {
    @include xs {
      font-size: 12px !important;
    }
  }

  &-name {
    @include xs {
      max-width: 52px;
    }
  }

  // 현재위치
  &-on {
    background: $color-basic;
    .appStep-check {
      width: 40px;
      height: 40px;
      position: absolute;
      background: $color-basic;
      border-radius: 50%;
      border: 2px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      @include xs {
        width: 20px;
        height: 20px;
        border: unset;
      }
    }
    span {
      color: white;
    }
  }

  // 지난위치
  &-end {
    background: $color-basic;

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

      @include xs {
        width: 10px;
        height: 5px;
      }
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

      @include xs {
        width: unset;
        height: unset;
        background: unset;
      }
    }
    span {
      color: #D5D5D5;

      @include xs {
        color: #fff;
      }
    }
  }
}
</style>
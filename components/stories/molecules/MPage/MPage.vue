<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue';

interface PropType {
  modelValue: number;
  total: number;
}

const props = withDefaults(defineProps<PropType>(), {
  total: 0
});

const curNum = ref<number>(1);
watchEffect(() => {
  curNum.value = props.modelValue;
})

const emit = defineEmits(['update:modelValue']);
watch(curNum, newValue => {
  emit('update:modelValue', newValue);
})

const checkStep = (value, btnIdx) => {
  if (value % 10 === btnIdx) {
    return true;
  }
  if (value % 10 === 0 && btnIdx === 10) {
    return true;
  }
  return false;
}

const range = computed(() => {
  const gap = getGap();
  if (gap >= 10) {
    return 10;
  }
  return props.total % 10;
});

const checkLast = computed(() => {
  const gap = getGap();
  if (gap <= 10) return true;
  return false
})
const checkFirst = computed(() => {
  if (curNum.value > 0 && curNum.value <= 10) return true;
  return false;
})

const getGap = () => {
  let curShare = parseInt((curNum.value / 10).toString(), 10);
  if (curNum.value % 10 === 0) {
    curShare -= 1;
  }
  return props.total - curShare * 10;
}
const getIdx = (idx) => {
  let curShare = parseInt((curNum.value / 10).toString(), 10);
  if (curNum.value % 10 === 0) {
    curShare -= 1;
  }
  return curShare * 10 + idx
}
const toNext = () => {
  let remainder = curNum.value % 10;
  if (remainder === 0) remainder = 10;
  curNum.value += (11 - remainder);
}
const toPrev = () => {
  let remainder = curNum.value % 10;
  if (remainder === 0) remainder = 10
  curNum.value -= (remainder)
}
const toFirst = () => {
  curNum.value = 1;
}
const toLast = () => {
  curNum.value = props.total;
}
const setIdx = (idx) => {
  let curShare = parseInt((curNum.value / 10).toString(), 10);
  if (curNum.value % 10 === 0) {
    curShare -= 1;
  }
  curNum.value = 10 * (curShare) + idx;
}
</script>

<template>
<div>
  <ul>
    <li>
      <button 
        class="page-item page-move" 
        :class="{ 'page-disable': checkFirst }"
        :disabled="checkFirst"
        @click="toFirst"
      >
        ≪
      </button>
    </li>
    <li>
      <button
        class="page-item page-move"
        :class="{ 'page-disable': checkFirst }"
        :disabled="checkFirst"
        @click="toPrev"
      >
        &lt;
      </button>
    </li>

    <!-- :background-color="checkStep(curNum, idx) ? 'blue' : 'black'" -->
    <li  
      v-for="idx in range"
      :key="`page-${idx}`"
      >
      <button
        class="page-item"
        :class="{ 'page-active': checkStep(curNum, idx) }"
        @click="setIdx(idx)"
      >
        {{ getIdx(idx) }}
      </button>
    </li>

    <li>
      <button 
        class="page-item page-move"
        :class="{ 'page-disable': checkLast }"
        :disabled="checkLast"
        @click="toNext"
      >
        &gt;
      </button>
    </li>
    <li>
      <button 
        class="page-item page-move"
        :class="{ 'page-disable': checkLast }"
        :disabled="checkLast"
        @click="toLast"
      >
      ≫
      </button>
    </li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
ul {
  
  li {
    display: inline-block;
    font-size: 16px;
    margin: 0 4px;

    @include xs {
      font-size: 14px;
      margin: 0 2px;
      margin-bottom: 4px;
    }
  }

  .page-item {
    cursor: pointer;
    color: #6c757d;
    border: 1px solid #dee2e6;
    background: white;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    text-align: center;
    padding: 2px;
    min-width: 28px;
    line-height: 26px;

    @include xs {
      min-width: 24px;
      padding: 1px;
      line-height: 24px;
    }
  }

  .page-active {
    background: #6c757d;
    border: 1px solid rgb(102, 102, 102);
    color: white;
    font-weight: bold;
  }
  .page-disable {
    background: #dee2e6;
    cursor: default;
  }
}
  
</style>
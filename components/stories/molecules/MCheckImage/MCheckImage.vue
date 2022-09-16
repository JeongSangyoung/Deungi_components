<script setup lang="ts">
import { CSSProperties, computed, ref } from 'vue';

interface PropType {
  name: string;
  image: string;
  title: string;
  cost: string;
  checked?: boolean;
  sale?: boolean;
  saleCost?: string;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}

const props = withDefaults(defineProps<PropType>(), {
  sale: false,
  saleCost: '0원',
  checked: false,
})

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  return style;
})

const emit = defineEmits(['update:modelValue'])

// const isChecked = ref(false);
// if (props.checked) { isChecked.value = true; }

// v-model="isChecked"

// @click="emit('update:modelValue', isChecked)"
</script>

<template>
<div class="mCheck">
  <input
    type="checkbox"
    :id="name" 
    :checked="checked"
  />
  <label
    :for="name"
    class="mRButton"
  >
    <div class="mCheck-image">
      <img class="mCheck-main" :src="image" />
      <img class="mCheck-check" src="https://deungi24.com/img/ico-main.png" />
    </div>

    <div class="mCheck-content">
      <p class="txt-title">{{ title }}</p>
      <div v-if="sale">
        <span class="txt-through mCheck-cost">{{ cost }}</span>
        <img class="mCheck-right" src="https://deungi24.com/img/arr_right.png" />
        <span class="mCheck-sale">{{ saleCost }}</span>
      </div>
      <div v-else>
        <span class="mCheck-cost">{{ cost }}</span>
      </div>
    </div>
  </label>
</div>
</template>

<style lang="scss" scoped>
.mCheck {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  background: #edf0ff;
  border: 3px solid $color-basic;
  border-radius: 12px;

  @include xs {
    border: 2px solid $color-basic;
    border-radius: 6px;
  }


  input[type="checkbox"] {
    display: none;
  }

  label {
    cursor: pointer;
  }

  &-image {
    background: #fff;
    border-radius: 12px;
 
    position: relative;
    height: 190px;
    overflow: hidden;
    position: relative;

    @include xs {
      border-radius: 6px;
      height: 145px;
    }

    .mCheck-main {
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 36px;
    }
    .mCheck-check {
      width: 36px;
      position: absolute;
      left: 20px;
      top: 20px;
    }
  }

  &-content {
    padding: 20px;
    text-align: center;

    @include md {
      height: 130px;
    }

    .txt-title {
      font-size: 20px;
      font-family: 'GmarketSans';
      font-weight: 500;
      letter-spacing: -1.3px;
      margin-bottom: 8px;
    }

    .txt-through {
      text-decoration: line-through;
    }

    .mCheck-right {
      width: 8px;
      margin: 0 4px;
    }

    .mCheck-sale {
      font-weight: bold;
    }
  }
}
</style>
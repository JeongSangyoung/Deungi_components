<script setup lang="ts">
import { ref } from 'vue';
interface PropType {
  name: string;
  items: ICostItem[];
  defaultIndex?: number;
}

interface ICostItem {
  duration: string;
  advantage: string;
  method: string;
  image: { checked: string, unchecked: string },
  cost: string;
}
const props = withDefaults(defineProps<PropType>(), {
  defaultIndex: 0
});

const checked = ref(0);

const emit = defineEmits(['update:modelValue'])

const clicked = (idx) => {
  if (idx === 0) {

  }
  emit('update:modelValue', idx)
}
const imgChecker = (idx) => {
  if (checked.value === idx) {
    return props.items[idx].image.checked;
  }
  return props.items[idx].image.unchecked
}

</script>

<template>
<ul class="mCostCard-list">
  <li 
    v-for="(item, item_idx) in items" 
    :key="item.method"
    class="mCostCard"
  >
    <input 
      type="radio" 
      :id="item.method" 
      :value="item_idx" 
      :name="name" 
      :checked="defaultIndex == item_idx"
      v-model="checked"
    />
    <label :for="item.method" @click="clicked(item_idx)">
      <div 
        class="mCostCard-container"
        :style="{
          backgroundImage: 'url(' + imgChecker(item_idx) + ')' 
        }"
      >

        <div class="mCostCard-duration">
          평균 설립 기간 : {{ item.duration }}
        </div>

        <div class="mCostCard-advantage">
          {{ item.advantage}}
        </div>

        <div class="mCostCard-method">
          {{ item.method}}
        </div>

      </div>
      <div class="mCostCard-cost">
        {{ item.cost }} <span>원</span>
      </div>
    </label>
  </li>
</ul>

</template>

<style lang="scss" scoped>
.mCostCard-list {
  padding: 0;
  margin: 0;
  display: flex;

  @include smAndDown {
    flex-direction: column;
    margin: 0 auto;
    max-width: 500px;
  }

  li {
    list-style: none;
    margin-right: 20px;

    @include smAndDown {
      margin-right: unset;
      margin-bottom: 16px;
    }

    &:last-child {
      margin-right: unset;
    }
  }
}

.mCostCard {
  position: relative;
  text-align: center;

  @include smAndDown {
    text-align: unset;
  }
  
  label {
    cursor: pointer;
    display: block;
    background: #9B9B9B;
    position: relative;
    padding: 4px;
    border-radius: 10px;
    font-family: 'GmarketSans';
  }

  &-container {
    background: #fff;
    border-radius: 10px;
    padding: 36px 24px 12px 24px;

    width: 282px;
    height: 400px;
    background-size: auto;
    background-position: center 210px;
    background-repeat: no-repeat;

    @include smAndDown {
      width: unset;
      height: unset;
      background-size: 130px;
      background-position: calc(100% - 24px) 22px;
      padding: 16px 12px 12px 24px
    }
  }

  input[type="radio"] {
    display: none;

    &:checked + label {
      background: #3B53B5;
    }

    &:checked + label .img-unchecked {
      display: none !important;
    }

    &:checked + label .img-checked {
      display: inline-block !important;
    }

    &:checked + label .mCostCard-duration {
      border-top: 2px solid #3B53B5;
      border-bottom: 2px solid #3B53B5;
      color: #3B53B5;
    }
  }

  &-duration {
    padding: 12px 0;
    font-size: 18px;
    margin-bottom: 30px;
    color: #9b9b9b;
    font-weight: 300;
    border-top: 2px solid #9B9B9B;
    border-bottom: 2px solid #9B9B9B;
    display: inline-block;
    @include smAndDown {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }

  &-advantage {
    font-size: 20px;
    color: #9b9b9b;
    @include smAndDown {
      font-size: 16px;
    }
  }

  &-method {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 24px;

    @include smAndDown {
      margin-bottom: unset;
      font-size: 28px;
    }
  }

  &-cost {
    font-size: 34px;
    font-weight: 900;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    @include smAndDown {
      padding: 12px 0;
      font-size: 24px;
    }

    span {
      font-size: 20px;
      font-weight: 500;

      @include smAndDown {
        font-size: 16px;
      }
    }


  }
}

.img-checked {
  display: none;
}
</style>
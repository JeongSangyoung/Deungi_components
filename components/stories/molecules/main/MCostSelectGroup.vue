<script setup lang="ts">
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

const emit = defineEmits(['select'])

</script>

<template>
<ul class="mCostCard-list">
  <li 
    v-for="(item, item_idx) in items" 
    :key="item.method"
    class="mCostCard"
  >
    <input type="radio" :id="item.method" :value="item.method" :name="name" :checked="defaultIndex == item_idx"/>
    <label :for="item.method" @click="emit('select', item_idx)">
      <div class="mCostCard-container">

        <div class="mCostCard-duration">
          평균 설립 기간 : {{ item.duration }}
        </div>

        <div class="mCostCard-advantage">
          {{ item.advantage}}
        </div>

        <div class="mCostCard-method">
          {{ item.method}}
        </div>

        <div class="mCostCard-image">
          <img class="img-unchecked" :src="item.image.unchecked" />
          <img class="img-checked" :src="item.image.checked" />
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

  li {
    list-style: none;
    float: left;
  }
}

.mCostCard {
  position: relative;
  text-align: center;
  width: 282px;

  label {
    cursor: pointer;
    display: block;
    background: #9B9B9B;
    position: relative;
    padding: 4px;
    border-radius: 10px;
  }

  &-container {
    background: #fff;
    border-radius: 10px;
    padding: 36px 0 12px 0;
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
    font-size: 17px;
    margin-bottom: 30px;
    color: #9b9b9b;
    font-weight: 300;
    // font-family: 'GmarketSans';
    border-top: 2px solid #9B9B9B;
    border-bottom: 2px solid #9B9B9B;
    display: inline-block;
  }

  &-advantage {
    font-size: 20px;
    color: #9b9b9b;
  }

  &-method {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  &-image {
    height: 210px;
    img {
      height: 100%;
    }
  }

  &-cost {
    font-size: 34px;
    font-weight: 900;
    color: #fff;
    padding: 20px 0;

    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
}

.img-checked {
  display: none;
}
</style>
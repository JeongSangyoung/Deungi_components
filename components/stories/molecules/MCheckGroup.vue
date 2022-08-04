<script setup lang="ts">
import { ref } from 'vue';
interface PropType {
  items: ICheckItem[];
  setInline?: boolean;
}

interface ICheckItem {
  content: string;
  name: string;
}

const props = withDefaults(defineProps<PropType>(), {
  setInline: false,
})

const emit = defineEmits(['check'])

const checkArray = ref(new Array(props.items.length).fill(false));
const createArray = (item_idx) => {
  checkArray.value[item_idx] = !checkArray.value[item_idx]
  emit('check', checkArray.value)
}

</script>

<template>
<ul class="mCheckGroup" :class="{ setInline: setInline }" >
  <li 
    v-for="(item, item_idx) in items" 
    :class="{ 'pr-3': setInline && item_idx < items.length }"
  >
    <div class="mLabel">
      <input type="checkbox"
        :id="item.name"
        @click="createArray(item_idx)" 
      />
      <label :for="item.name"><div>{{ item.content }}</div></label>
    </div>
  </li>
</ul>
</template>

<style lang="scss" scoped>
.mCheckGroup {
  margin: 0;
  padding: 0;
  font-size: 20px;
  display: block;

  li {
    list-style: none;
  }
}

.mLabel {
  input[type="checkbox"] {
    display: none;

    &:checked {
      + label:before {
        border: 1px solid #3a52b4;
        background: #3a52b4;
      }

      + label {
        color: #3a52b4;
      }
    }
  }

  label {
    position: relative;
    color: #333;
    cursor: pointer;
    display: inline-block;

    > div {
      padding-left: 42px;
      line-height: 30px;
    }
    &:before {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      // left: 22px;
      box-sizing: border-box;
      border-radius: 50%;
      background: #d0d0d0;
      vertical-align: -3px;
      transform: translate(0, -50%);
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
      -o-transition: 0.1s;
      transition: 0.1s;
    }

    &:after {
      content: "";
      width: 12px;
      height: 6px;
      position: absolute;
      top: 50%;
      left: 6px;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      margin-top: -8px;
      -webkit-transform: rotate(-45deg) translate(0, 50%);
      -ms-transform: rotate(-45deg) translate(0, 50%);
      transform: rotate(-45deg) translate(0, 50%);
    }
  }
}

.setInline {
  display: flex !important;
}
</style>
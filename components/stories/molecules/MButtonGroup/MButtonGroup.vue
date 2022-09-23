<script setup lang="ts">
import MButton from '../MButton/MButton.vue';

interface PropType {
  items: IBtnItem[]
}
interface IBtnItem {
  background: string;
  text: string;
  number: string;
}

const props = withDefaults(defineProps<PropType>(), {});
const emit = defineEmits(['update:modelValue'])
const changeValue = (idx) => {
  emit('update:modelValue', idx)
}

</script>

<template>
<div class="btngroup">
  <MButton
    v-for="(item, idx) in items"
    :key="item.text"
    :background-color="item.background"
    class="btngroup-btn"
    @click="changeValue(idx)"
  >
    <span>{{ item.text }}</span>
    <div class="btngroup-cnt">
      {{ item.number }}
    </div>
</MButton>
</div>
</template>

<style lang="scss" scoped>

.btngroup-btn {
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 4px;

  span {
    font-size: 18px;
    margin-right: 4px;
  }
}
.btngroup-cnt {
  display: inline-block;
  padding: 1px 4px;;
  background: #E2E3E5;
  color: black;
  border-radius: 3px;
}

</style>
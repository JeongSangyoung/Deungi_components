<script setup lang="ts">
import MRadioExpandGroup from '@/components/stories/molecules/MRadioExpandGroup/MRadioExpandGroup.vue';

import { IStep1CorpItem } from '@/types';

import { ref, watchEffect } from 'vue';

interface PropType {
  state: {
    radio: number;
  }
  propsData: {
    name: string;
    items: IStep1CorpItem[];
  }
}

const props = withDefaults(defineProps<PropType>(), {}) 

const radio = ref<number>();

watchEffect(() => {
  if (props.state.radio) {
    console.log(props.state.radio, 'zz')
    radio.value = props.state.radio;
  }
}, )

const emit = defineEmits(['verify']);
const changeValue = () => {
  emit('verify', {
      radio: radio.value,
      verified: radio.value !== -1 
    }
  );
}

</script>

<template>
<div>
  {{ radio }}
  <p class="title-type-1">법인 유형을 선택하세요.</p>
  <MRadioExpandGroup
    v-model="radio" 
    :name="propsData.name" 
    :items="propsData.items"
    @change="changeValue"
  />
</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
</style>
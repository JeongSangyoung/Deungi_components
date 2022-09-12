<script setup lang="ts">
import { ref } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';
import OApplySelectType from '@/components/stories/organisms/OApplySelectType/OApplySelectType.vue';
import { IStep1CorpItem } from '@/types';
import Dummy from '@/components/composable/useDummy';

const radio = ref<number>(-1);
const corpItems = ref<IStep1CorpItem[]>([]);

// Fetch
Dummy<IStep1CorpItem[]>('corpItems').then((result) => corpItems.value = result);
Dummy<string>('corpType').then((result) => {
  radio.value = corpItems.value.findIndex(corp => {
    return corp.content === result;
  });
});

const emit = defineEmits(['submit'])
const submit = () => {
  emit('submit', {
    corpType: corpItems.value[radio.value].content
  })
}

</script>

<template>
<ApplyLayout>
  <OApplySelectType
    id="selectType"
    v-model="radio"
    name="selectType"
    :items="corpItems"
  />
  <div style="display: flex; justify-content: center">
    <MButton 
      class="next-btn" 
      width="100%"
      max-width="400px"
      :disabled="radio === -1"
      @click="submit"
      >
      <div>
        다음
        <img src="https://deungi24.com/img/ico-1.png" />
      </div>
    </MButton>
  </div>
</ApplyLayout>

</template>

<style lang="scss" scoped>
.next-btn {
  margin-top: 48px;
}
</style>
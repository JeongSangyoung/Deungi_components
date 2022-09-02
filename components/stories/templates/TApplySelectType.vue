<script setup lang="ts">
import ApplyLayout from '@/layouts/apply.vue';
import MButton from '@/components/stories/molecules/MButton.vue';
import OApplySelectType from '@/components/stories/organisms/OApplySelectType.vue';
import { IStep1CorpItems, State, TemplateArgs } from '@/types';
import { ref } from 'vue';

interface ISearchState {
  [index: string]: number;
}

interface PropType {
  corpItems: IStep1CorpItems[];
}
const props = withDefaults(defineProps<PropType>(), {});

const searchState = ref<State<ISearchState>>({
  data: { radio: -1 },
});

const searchArgs: TemplateArgs = {
  state: {
    radio: -1
  },
  propsData: {
    name: 'selectType',
    items: props.corpItems,
  }
}

const updateSelect = (data) => {
  console.log(data)
}

</script>

<template>
<ApplyLayout>
  <OApplySelectType
    id="selectType"
    v-bind="searchArgs"
    @onSelect="updateSelect"
  />

  <div style="display: flex; justify-content: center">
    <MButton 
      class="next-btn" 
      width="100%"
      max-width="400px"
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
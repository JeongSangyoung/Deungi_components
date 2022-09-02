<script setup lang="ts">
import { ref } from 'vue';
import ApplyLayout from '@/layouts/apply.vue';
import MButton from '@/components/stories/molecules/MButton.vue';
import OApplyMap from '@/components/stories/organisms/OApplyMap.vue';
import OApplyNaming1 from '../organisms/OApplyNaming1.vue';

const step = ref(1)

const next_step = () => {
  window.scrollTo(0, 0);
  step.value += 1
}

</script>

<template>
<ApplyLayout>
  <div v-show="step === 1">
    <OApplyMap />
    <div style="display: flex; justify-content: center">
      <MButton 
        class="next-btn" 
        width="100%"
        max-width="400px"
        @click="next_step()"
      >
        <div>
          다음
          <img src="https://deungi24.com/img/ico-1.png" />
        </div>
      </MButton>
    </div>
  </div>

  <div v-show="step === 2">
    <OApplyNaming1 />
  </div>
</ApplyLayout>

</template>

<style lang="scss" scoped>
.next-btn {
  margin-top: 48px;
}
</style>
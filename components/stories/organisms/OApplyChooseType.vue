<script setup lang="ts">
import MRadioExpertGroup from '../molecules/MRadioExpertGroup.vue';
import MButton from '../molecules/MButton.vue';

interface PropType {
  name: string;
  items: IExpertItems[];
}

interface IExpertItems {
  content: string;
  image?: string;
  expertName: string;
  expertCharge: string;
  expertContent: string; 
}
withDefaults(defineProps<PropType>(), {})

</script>

<template>
<p class="title-type-1">법인 유형을 선택하세요.</p>
<MRadioExpertGroup :name="name" :items="items" />
<div style="display: flex; justify-content: center">
  <MButton 
    class="next-btn" 
    background-color="#3952B3" 
    width="100%" 
    max-width="400px"
  >
    <div>
      다음
      <img src="https://deungi24.com/img/ico-1.png" />
    </div>
  </MButton>
</div>
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 24px;
}

.next-btn {
  margin-top: 36px;
  color: white;
  font-size: 20px;
  padding: 24px;
  position: relative;
  img {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
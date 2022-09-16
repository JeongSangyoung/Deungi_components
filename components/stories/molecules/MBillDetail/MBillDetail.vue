<script setup lang="ts">
interface PropType {
  costName: string;
  totalCost: string;
  details?: IBillDetail[] | undefined;
  sale?: IBillDetail | undefined;
}

interface IBillDetail {
  costName: string;
  cost: string;
  sale?: boolean;
}

withDefaults(defineProps<PropType>(), {
  details: () => undefined,
  sale: () => undefined
})

</script>

<template>
<div>
  <div class="bill-header bill">
    <p>• {{ costName }}</p>
    <p>{{ totalCost }}원</p>
  </div>
  <ul v-if="details && details.length" class="bill-details">
    <li 
      v-for="detail in details" 
      :key="detail.costName"
      :style="{ color: detail.sale ? '#596AB1' : '#999999'}"
    >
      <div class="bill-detail">{{ detail.costName }}</div>
      <div class="bill-detail-cost">
        <span v-if="!detail.sale">+</span>
        <span v-else>-</span>
        {{ detail.cost }}원
      </div>
    </li>
  </ul>
  <div v-if="sale && sale.costName" class="bill-sale bill">
    <p>• {{ sale.costName }}</p>
    <p>-{{ sale.cost }}원</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.bill {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8.5px;
  p {
    margin: 0;
  }
}

.bill-header {
  font-weight: bold;
  font-size: 18px;

  @include xs {
    font-size: 16px;
  }
}

.bill-sale {
  color: #ff0000;
  font-size: 18px;
  font-weight: bold;

  @include xs {
    font-size: 16px;
  }
}

.bill-details {
  li {
    margin-bottom: 4.5px;
    margin-top: 8.5px;
    display: flex;
    align-items: center;
    @include xs {
      margin-bottom: 8px;
      margin-top: 8px;
    }
  }
}

.bill-detail {
  display: inline-block;
  text-align: right;
  width: calc(100% - 150px);
  
  
  @include xs {
    font-size: 14px;
    width: calc(100% - 100px);
  }

}
.bill-detail-cost {
  width: 150px;
  display: inline-block;
  text-align: right;

  @include xs {
    font-size: 14px;
    width: 100px;
  }
}
</style>
<script setup lang="ts">
import { ref, computed, watchEffect, watch } from 'vue';
import MButtonGroup from '../../molecules/MButtonGroup/MButtonGroup.vue';
import ODateRange from '../ODateRange/ODateRange.vue';
import MInput from '../../molecules/MInput/MInput.vue';
import MButton from '../../molecules/MButton/MButton.vue';
import { format } from '@/components/stories/molecules/MDatePicker/datePicker';

import { orderItems } from '@/components/composable/useData';
import MPage from '../../molecules/MPage/MPage.vue';

const btnItems = ref([
  {
    text: '전체',
    background: '#6C757D',
    number: 0,
  },
  {
    text: '담당자 배정대기',
    background: 'tomato',
    number: 0,
  },
  {
    text: '정보입력 대기중',
    background: '#FFC800',
    number: 0,
  },
  {
    text: '등기매니저 확인중',
    background: '#079D05',
    number: 0,
  },
  {
    text: '추가결제 대기중',
    background: '#523FF1',
    number: 0,
  },
  {
    text: '최종컨펌 대기중',
    background: '#523FF1',
    number: 0,
  },
  {
    text: '등기 준비중',
    background: '#FF4BD8',
    number: 0,
  },
  {
    text: '등기 완료',
    background: '#121212',
    number: 0,
  },
  {
    text: '환불 완료',
    background: '#858585',
    number: 0,
  },
]);

const radio = ref<number>(0);
const btnState = computed(() => btnItems.value[radio.value].text);
const corpName = ref<string>('');
const itemTotal = ref<number>(0);
const viewTotal = ref<number>(10);
const pageTotal = computed(() => {
  return Math.ceil(itemTotal.value / viewTotal.value);
});
const pageNumber = ref<number>(1);
const orderFiltered = ref<TOrderItem[]>([]);
const orderShow = computed(() => {
  return orderFiltered.value.slice((pageNumber.value - 1) * viewTotal.value, pageNumber.value * viewTotal.value)
});
const pickStart = ref<string>(''); 
const pickEnd = ref<string>('');
const allCheck = ref<boolean>(false);

const orderObj = {
  head: '접수번호',
  corp: '법인명',
  customer: '고객명',
  email: '이메일',
  tel: '연락처',
  service: '주문서비스',
  ingam: '사용인감추가',
  status: '업무진행상태',
  updated: '업데이트일자',
}
type TOrderEnum = keyof typeof orderObj;
type TOrderItem = { 
  [key in TOrderEnum]: string;
}

const orders = ref<TOrderItem[]>([]);
orderItems().then((result: TOrderItem[]) => {
  orders.value = result;

  // 상태카운팅
  result.forEach(order => {
    btnItems.value[0].number += 1; // 전체 카운팅
    for (let i = 0; i < btnItems.value.length; i += 1) {
      if (order.status === btnItems.value[i].text) {
        btnItems.value[i].number += 1;
        break;
      }
    }
  });

  orderFiltered.value = result;
  itemTotal.value = result.length;
});

/** 검색어, 날짜, 카테고리 필터링 */
const changeState = () => {
  pageNumber.value = 1;
  // 카테고리 -> 날짜 -> 검색어 순으로 필터링
  if (pickStart.value && pickEnd.value) {
    orderFiltered.value = orders.value.filter(order => {
      if (order.status === btnState.value || btnState.value === '전체') {
        const startTime = new Date(pickStart.value);
        const endTime = new Date(pickEnd.value);
        endTime.setHours(23);
        endTime.setMinutes(59);
        const orderTime = new Date(order.updated);
        if (startTime <= orderTime && endTime >= orderTime) {
          if (order.corp.includes(corpName.value)) {
            return order
          }
        }
      }
    });
  } else {
    orderFiltered.value = orders.value.filter(order => {
      if (order.status === btnState.value || btnState.value === '전체') {
        if (order.corp.includes(corpName.value)) {
          return order
        }
      }
    })
  }
  itemTotal.value = orderFiltered.value.length;
  pageNumber.value = 1;
}

watch(corpName, _ => {
  changeState();
});
watch(radio, _ => {
  allCheck.value = false;
  changeState();
});
watch(pickStart, _ => {
  changeState();
});
watch(pickEnd, _ => {
  changeState();
});
watch(viewTotal, _ => {
  allCheck.value = false;
  changeState();
});
watch(pageNumber, _ => {
  allCheck.value = false;
});
watch(allCheck, newValue => {
  const checkElements = document.querySelectorAll('.orderTable tbody input');
  if (newValue) {
    checkElements.forEach(element => {
      if (element != null) {
        (element as HTMLInputElement ).checked = true;
      }
    })
  } else {
    checkElements.forEach(element => {
      if (element != null) {
        (element as HTMLInputElement ).checked = false;
      }
    })
  }
})

const setDate = () => {
  pickStart.value = format(new Date());
  pickEnd.value = format(new Date());
}

const orderHeads = computed(() => {
  return Object.values(orderObj).map(item => {
    return item;
  });
});

const downloadExcel = () => {
  const checkList = [];
  const checkElements = document.querySelectorAll('.orderTable tbody input');
  const acceptTrElements = document.querySelectorAll('.orderTable tbody tr');
  if (checkElements === null || acceptTrElements === null) return;
  if (checkElements.length !== acceptTrElements.length) return;
  checkElements.forEach((element, idx) => {
    if (element != null) {
      if ((element as HTMLInputElement ).checked) {
        checkList.push(
          acceptTrElements[idx].querySelectorAll('td')[1].innerText
        )
      }
    }
  });
  console.log(checkList);
}

const clickTd = (order: TOrderItem) => {
  console.log(order)
}
</script>

<template>
<div>
  <p class="title-type-1">
    주문내역
  </p>

  <MButtonGroup
    :items="btnItems"
    v-model="radio"
    class="btngroup"
  />
  <div class="search">
    <select v-model="viewTotal" class="search-select">
      <option
        v-for="num in [5, 10, 15, 20, 25, 30, 50, 100]"
        :value="num"
        :key="num"
      >
        {{ num }}
      </option>

    </select>
    <ODateRange
      v-model:pick-start="pickStart"
      v-model:pick-end="pickEnd"
      class="search-date"
      @click.once="setDate"
    />
    <MInput class="search-input" v-model="corpName" width="250px" place-holder="법인명" />
    <!-- <MButton class="search-btn"> 검색</MButton> -->
    <MButton class="search-excel" background-color="grey" @click="downloadExcel">엑셀다운로드</MButton>
  </div>

  <div>
    Total : {{ itemTotal }}
  </div>
  <div class="orderTable">
    <table>
      <thead>
        <tr>
            <th v-for="idx in orderHeads.length + 1">
              <input v-if="idx === 1" v-model="allCheck" type="checkbox" style="margin: 0;" />
              <span v-else>
                {{ orderHeads[idx - 2] }}
              </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orderShow">
          <td v-for="idx in Object.values(order).length + 1">
            <input v-if="idx === 1" type="checkbox" style="margin: 0;"/>
            <span 
              v-else
              :class="{'orderTable-tdCorp' : orderHeads[idx - 2] === '법인명'}"
              @click="clickTd(order)"
            >
              {{ Object.values(order)[idx - 2] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <MPage v-model="pageNumber" :total="pageTotal"  class="orderPage" />

</div>

</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
.btngroup {
  margin-bottom: 16px;
}
.search {
  display: flex;
  margin-bottom: 24px;
  position: relative;

  @include smAndDown {
    flex-direction: column;
  }

  &-select {
    margin-right: 20px;
    font-size: 18px;

    @include smAndDown {
      height: 52px;
      font-size: 16px;
      margin-bottom: 16px;
      width: 150px;
    }
  }

  &-date {
    margin-right: 20px;

    @include smAndDown {
      margin-bottom: 16px;
    }
  }

  &-input {
    @include smAndDown {
      margin-bottom: 16px;
    }
  }

  &-btn {
    font-size: 20px;
    width: 100px;

    @include smAndDown {
      margin-bottom: 16px;
      font-size: 16px;
      width: 250px;
      height: 52px;
    }
  }

  &-excel {
    font-size: 20px;

    @include mdAndUp {
      height: 62px;
      position: absolute;
      right: 0;
    }
    
    @include smAndDown {
      font-size: 16px;
      height: 52px;
      width: 250px;
    }
  }
}

.orderTable {
  margin-bottom: 24px;
  table {
    width: 100%;
    font-size: 14px;
    // border-top: 1px solid #6c757d;
    border-collapse: collapse;
    thead {
      background: #eee;
      th, td {
        padding: 12px;
      }
    }

    tbody {
      color: #6c757d;

      th, td {
        padding: 12px;
        border-bottom: 1px solid #6c757d;
        max-width: 180px;
        text-align: center;
        word-break: break-all;
      }
    }
  }

  &-tdCorp {
    color: $color-basic;
    font-weight: bold;
    cursor: pointer;
  }
}

.orderPage {
  display: flex;
  justify-content: center;
}
</style>
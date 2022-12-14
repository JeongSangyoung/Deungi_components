<script setup lang="ts">
import { ref, watchEffect, watch, computed } from 'vue';
import { format, getCalendar, getMonth, getDate, getYear } from './datePicker';
import CustomInput from './CustomInput.vue';

interface PropType {
  mode: string;
  pickStart: string;
  pickEnd: string;
  curDate?: string;
}
interface Day {
  year: number;
  day: number;
  month: number;
  inMonth: boolean;
}
const props = withDefaults(defineProps<PropType>(), {
  pickStart: format(new Date()),
  pickEnd: format(new Date()),
});

const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const showPicker = ref<boolean>(false);
const date = ref<string>(format(new Date()));
const pickStart = ref<string>(format(new Date()));
const pickEnd = ref<string>(format(new Date()));
const datePicker = ref<Day[][]>(getCalendar(date.value));

watchEffect(() => {
  datePicker.value = getCalendar(date.value);
  pickStart.value = props.pickStart;
  pickEnd.value = props.pickEnd;

  if (props.mode === 'start') {
    datePicker.value = getCalendar(pickStart.value);
  } else if (props.mode === 'end') {
    datePicker.value = getCalendar(pickEnd.value);
  }
});

const emit = defineEmits(['update:pickStart', 'update:pickEnd'])
watch(date, newDate => {
  if (props.mode === 'start') {
    emit('update:pickStart', newDate);
  } else if (props.mode === 'end') {
    emit('update:pickEnd', newDate);
  }
});

const showCalendar = () => {
  setTimeout(() => {
    showPicker.value = true;
  }, 1);
}
const outside = () => {
  if (showPicker.value) showPicker.value = false;
}
const monthDisabled = () => {
  if (props.mode === 'end') {
    if (getMonth(pickStart.value) === getMonth(date.value)) {
      return true;
    }
  }
  return false;
}
const prevMonth = () => {
  const tempDate = new Date(date.value);
  tempDate.setMonth(tempDate.getMonth() - 1);
  date.value = format(tempDate);
  datePicker.value = getCalendar(date.value);
}
const nextMonth = () => {
  const tempDate = new Date(date.value);
  tempDate.setMonth(tempDate.getMonth() + 1);
  date.value = format(tempDate);
  datePicker.value = getCalendar(date.value);
}
const dateDisableCheck = ({ day, month, year, inMonth }: Day) => {
  if (!inMonth) return true;
  if (props.mode === 'end') {
    const d = new Date(year, month, day);
    if (d < new Date(pickStart.value)) {
      if (getDate(pickStart.value) === day) return false;
      return true;
    }
  }
  return false;
}

const dateClick = ({ day, month, year }: Day) => {
  showPicker.value = false;
  date.value = format(new Date(year, month, day))
  datePicker.value = getCalendar(date.value);
}
const checkInnerDate = ({ day, month, year }: Day) => {
  const d = new Date(year, month, day);
  if (new Date(pickStart.value) < d && new Date(pickEnd.value) > d) {
    return true;
  }
  return false;
}
const checkDate = ({ day, month, year }: Day, mode: string) => {
  let d = new Date();
  if (mode === 'today') {}
  else if (mode === 'start') { 
    d = new Date(pickStart.value);
    d = new Date(date.value);
  }
  else if (mode === 'end') {
    d = new Date(pickEnd.value);
    d = new Date(date.value);
  }

  if (d.getFullYear() === year) {
    if (d.getMonth() === month) {
      if (d.getDate() === day) {
        return true;
      }
    }
  }
  return false;
}
</script>

<template>
<div :style="{ position: 'relative' }">
  <CustomInput
    v-if="props.mode === 'start'"
    v-model="pickStart"
    width="150px"
    @click="showCalendar"
  />
  <CustomInput
    v-if="props.mode === 'end'"
    v-model="pickEnd"
    width="150px"
    @click="showCalendar"
  />

  <div v-show="showPicker" v-click-outside="outside" class="picker">
    <div class="picker__title">
      <button
        class="picker__button--circle"
        :disabled="monthDisabled()"
        @click="prevMonth"
      >

        &lt;
      </button>
      <span> {{ getYear(date) }}. {{ getMonth(date) }} </span>
      <button class="picker__button--circle" @click="nextMonth">

        &gt;
      </button>
    </div>

    <div class="picker__content">
      <span v-for="dy in dayList" :key="dy" class="picker__dayList">
        {{ dy }}
      </span>
      <div
        v-for="(week, idx1) in datePicker"
        :key="`picker-week-${idx1}`"
        class="picker__week"
      >
        <button
          v-for="(day, idx2) in week"
          :key="`picker-day-${idx2}-week-${idx1}`"
          class="picker__day"
          :class="{
            picker__today: checkDate(day, 'today'),
            picker__start: checkDate(day, 'start'),
            picker__end: checkDate(day, 'end') && !dateDisableCheck(day),
            picker__inner: checkInnerDate(day),
            'picker__button--actions': !dateDisableCheck(day)
          }"
          :disabled="dateDisableCheck(day)"
          @click="dateClick(day)"
        >
          <span class="picker__day--zIndex">{{ day.day }}</span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.picker {
  box-sizing: content-box;
  width: calc(2.4rem * 7 + 1px);
  height: calc(3rem + 19px + 2.5rem * 6);
  padding-left: 2px;
  background: #ebeff4;
  border: 1px solid #b1b1b1;
  z-index: 2;

  position: absolute;
  transform: translateY(-1px);

  button {
    border: none;
  }
}
.picker__title {
  height: 3rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.picker__button--circle {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  background: #ebeff4;

  transition: all 0.3s;

  &:hover {
    background: #ffffff;
  }
  &:disabled {
    background: #ebeff4;
    cursor: default;
    color: #bebebe;
  }
}

.picker__week {
  height: 2.4rem;
  display: flex;
  align-items: center;
  position: relative;
}
.picker__day {
  width: 2.4rem;
  height: 100%;
  display: inline-block;
  text-align: center;
  background: #ebeff4;
  color: #424242;
}
.picker__day--zIndex {
  z-index: 2;
}
.picker__dayList {
  display: inline-block;
  width: 2.4rem;
  font-size: 0.8rem;
  text-align: center;
}
.picker__button--actions {
  transition: all 0.15s;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
  &:active {
    background: black;
  }
}
.picker__action {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
}
.picker__select {
  width: 3rem;
  text-align: center;
}
.picker__inner {
  background: #e8d5ff;
}
.picker__today {
  display: block;
  color: white !important;
  z-index: 3;
  position: relative;
  &:after {
    content: '';
    z-index: -1;
    display: flex;
    width: 2rem;
    height: 2rem;
    background: #3f1dff !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
}
.picker__start,
.picker__end {
  background: #cfa5ff;
  color: #222222;
}
.picker__day:disabled {
  color: #d3d3d3;
}
.picker__option:disabled {
  color: #d3d3d3;
}
</style>
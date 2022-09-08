<script setup lang="ts">
import { CSSProperties, computed, ref, watch } from 'vue';

interface PropType {
  modelValue: string | number;
  rounded?: boolean;
  placeHolder?: string;
  unit?: string;
  readonly?: boolean;
  prevImage?: string;
  maxlength?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  type?: 'text' | 'number';
}

const props = withDefaults(defineProps<PropType>(), {
  modelValue: '',
  rounded: false,
  placeHolder: '',
  unit: '',
  readonly: false,
  prevImage: '',
  maxlength: 24,
  width: '',
  maxWidth: '',
  height: '',
  type: 'text',
})

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  if (props.rounded) {
    style.borderRadius = '50vh'
  }
  return style;
})

const value = ref<string | number>('');
value.value = props.modelValue;

watch(value, newValue => {
  if (props.type !== 'number') return;
  newValue = newValue.toString().replace(/[^0-9|?!,]/g, '' );
  newValue = newValue.toString().replace(/,/g, '');
  value.value = newValue.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
})

const numberList = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
const unitList = ['', '만', '억', '조'];
const smallUnitList = ['천', '백', '십', ''];
const _makeHan = (text) => {
  let str = '';
  for (let i = 0 ; i < text.length; i++) {
    const num = text[i];
    if (num === '0') continue;
    str += numberList[num] + smallUnitList[i]
  }
  return str;
}
const numberToKor = computed(() => {
  let num = value.value.toString().replace(/,/g, '');
  if (num === '') return '';
  let unitCnt = Math.ceil(num.length / 4);

  const result = [];
  num = num.padStart(unitCnt * 4, '0');
  const arr = num.match(/[\w\W]{4}/g);

  for (let i = arr.length - 1, unitCnt = 0; i >= 0; i--, unitCnt++) {
    const hanValue = _makeHan(arr[i]);
    if (hanValue === '') continue;
    result.unshift(hanValue + unitList[unitCnt]);
  }
  return result.join('');
})

const emit = defineEmits(['update:modelValue']);

</script>

<template>
<div>

    <div class="mInput" :style="computedStyled">
      <img v-if="prevImage" :src="prevImage" />
      <input
        v-if="type!=='number'"
        v-model="value"
        type="text" 
        :placeholder="placeHolder"
        :maxLength="maxlength"
        :readonly="readonly"
        :style="{
          borderRadius: rounded ? '50vh' : '',
          padding: prevImage ? 
              rounded ? '0 30px 0 70px': '0 20px 0 70px' :
              rounded ? '0 30px' : '0 20px'
        }"
        @input="emit('update:modelValue', value)"
      />
      <input 
        v-else 
        v-model="value"
        type="text" 
        :placeholder="placeHolder"
        :maxLength="maxlength"
        :readonly="readonly"
        :style="{
          borderRadius: rounded ? '50vh' : '',
          padding: prevImage ? 
              rounded ? '0 30px 0 70px': '0 20px 0 70px' :
              rounded ? '0 30px' : '0 20px'
        }"
        oninput="
          javascript: 
            this.value = this.value.replace(/[^0-9|?!,]/g, '' );
          "
        @input="emit('update:modelValue', value.toString().replace(/,/g, ''))"
        />

        <!-- this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z]/g, '' ); -->
      <span class="mInput-unit">{{ unit }}</span>
  </div>
  <div v-if="type==='number'" class="unitKor">
    {{ numberToKor }}
  </div>
</div>
</template>

<style lang="scss" scoped>
.mInput {
  position: relative;

  img {
    width: 30px;
    position :absolute;
    top: 50%;
    left: 30px;
    transform: translate(0, -50%);
  }

  input {
    border: 1px solid #e9e9e9;
    box-sizing: border-box;
    height: 70px;
    font-size: 20px;
    outline: none;
    width: 100%;
    letter-spacing: -1px;

    &:read-only {
      background: #eee;
      cursor: default;
    }

    @include smAndDown {
      height: 62px;
      font-size: 18px;
    }

    @include tiny {
      height: 52px;
      font-size: 16px;
    }

  }

  &-unit {
    position: absolute;
    top: 24px;
    right: 20px;
    font-size: 16px;
    color: #6d7ab2;

    @include smAndDown {
      top: 20px;
      right: 18px;
    }

    @include xs {
      top: 16px;
      right: 18px;
      font-size: 14px;
    }
  }
}

.unitKor {
  color: #6d7ab2;
  padding: 10px 20px;

  @include xs {
    font-size: 14px;
  }
}
</style>
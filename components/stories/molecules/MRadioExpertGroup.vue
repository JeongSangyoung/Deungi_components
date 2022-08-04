<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import MExpertTooltip from '@/components/stories/molecules/MExpertTooltip.vue';

interface PropType {
  name: string;
  items: IExpertIems[];
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}
interface IExpertIems {
  content: string;
  image?: string;
  expertName: string;
  expertCharge: string;
  expertContent: string; 
}

const props = withDefaults(defineProps<PropType>(), {
  items: () => [
    {
      content: '유한 회사',
      image: 'https://deungi24.com/img/illu_1.png',
      expertName: '등기24',
      expertCharge: '등기24 변호사',
      expertContent: `
        <p style="font-size:22px;margin:0;font-weight:bold;">
        <span style="color: #3850a1">일반적인 법인</span>으로 <span style="color: #3850a1">외부 투자</span>와 <span
          style="color: #3850a1">절세</span>에 유리합니다.
        </p>
        <p style="margin:0;margin-top:8px;font-size:18px">한국에서 가장 흔한 법인 유형입니다. 특수 법인이 아니면 선택하세요.<br>공개적인 투자 유치나, 상장까지도 할 수
          있습니다.</p>
      `
    },
  ],
})

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  return style;
})

const emit = defineEmits(['select'])
</script>

<template>
  <ul 
    class="mRadioButtonGroup"
    :style="computedStyled"
  >
    <li 
      v-for="(item, item_idx) in items" 
      :key="item.content"
    >
      <div class="mLabel">
        <input type="radio" :id="item.content" :value="item.content" :name="name" />
        <label
          :for="item.content"
          class="mRButton"
          @click="emit('select', item_idx)"
        >
          {{ item.content }}
        </label>

        <div class="tooltip">
          <MExpertTooltip
            :image="item.image"          
            :name="item.expertName"          
            :charge="item.expertCharge"          
          >
            <div v-html="item.expertContent"></div>
          </MExpertTooltip>
        </div>
      </div>  
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.mRadioButtonGroup {
  margin: 0;
  padding: 0;
  font-size: 20px;
  display: block;

  li {
    position: relative;
    display: list-item;
    list-style: none;
  }

  .mLabel {
    position: relative;
    width: 100%;
  }

  label {
    padding: 20px 10px 23px 62px;
    display: block;
    position: relative;
    border: 1px solid #e9e9e9;
    background: #fff;
    cursor: pointer;
  }

  input[type="radio"] {
    display: none;

    &:checked {
       + .mRButton {
        border: 1px solid #ecf0ff;
        background: #ecf0ff;
        transition: 0.2s;
      }

      + .mRButton:before {
        border: 1px solid #3a52b4;
        background: #3a52b4;
      }

       + label + .tooltip  {
        display: block;
      }
    }
  }

  .mRButton:before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 22px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #d0d0d0;
    vertical-align: -3px;
    transform: translate(0, -50%);
    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
    -o-transition: 0.1s;
    transition: 0.1s;
  }

  .mRButton:after {
    content: "";
    width: 12px;
    height: 6px;
    position: absolute;
    top: 50%;
    left: 27px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    margin-top: -8px;
    -webkit-transform: rotate(-45deg) translate(0, 50%);
    -ms-transform: rotate(-45deg) translate(0, 50%);
    transform: rotate(-45deg) translate(0, 50%);
  }
}

.tooltip {
  display: none;
  width:100%;
  margin: 20px 0;

  &:after {
    content: '';
    clear: both;
    display: block;
  }
}
</style>
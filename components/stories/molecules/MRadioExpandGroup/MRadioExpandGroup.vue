<script setup lang="ts">
import { CSSProperties, computed, ref, watchEffect } from 'vue';
import MTooltip from '@/components/stories/molecules/MTooltip/MTooltip.vue';
import { IExpertItems } from '@/types';

interface PropType {
  modelValue: number;
  name: string;
  items: IExpertItems[];
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}

const props = withDefaults(defineProps<PropType>(), {});
const radio = ref<number>(-1);

watchEffect(() => {
  radio.value = props.modelValue;
})

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  return style;
})

const emit = defineEmits(['update:modelValue'])
const changeValue = (item_idx) => {
  emit('update:modelValue', item_idx)
}

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
        <input 
          type="radio" 
          :id="item.content" 
          :value="item_idx" 
          :name="name"
          @input="changeValue(item_idx)"
          :checked="modelValue === item_idx"
        />
        <label
          :for="item.content"
          class="mRButton"
        >
          {{ item.content }}
        </label>

        <div class="tooltip">
          <MTooltip
            :image="item.image"          
            :name="item.expertName"          
            :charge="item.expertCharge"          
          >
            <div v-html="item.expertContent"></div>
          </MTooltip>
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

  @include smAndDown {
    font-size: 16px;
  }

  li {
    position: relative;
    display: list-item;
    list-style: none;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: unset;
    }
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

    @include smAndDown {
      padding: 18px 8px 18px 52px;
    }
    @include tiny {
      padding: 18px 8px 18px 40px;
    }

    &:hover {
      background: #f5faff;
    }
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
        border: 1px solid $color-basic;
        background: $color-basic;
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

    @include smAndDown {
      width: 26px;
      height: 26px;
      left: 18px;
    }
    @include tiny {
      width: 20px;
      height: 20px;
      left: 14px;
    }
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

    @include smAndDown {
      width: 10px;
      height: 6px;
      left: 23px;
    }
    @include tiny {
      width: 7px;
      height: 5px;
      left: 18px;
    }
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
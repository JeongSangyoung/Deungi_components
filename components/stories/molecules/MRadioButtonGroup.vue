<script setup lang="ts">
import { CSSProperties, computed } from 'vue';

interface PropType {
  name: string;
  contents: string[];
  noCheckIcon?: boolean;
  setInline?: boolean;
  defaultIndex?: number;
  rearImages?: {
    unchecked: string;
    checked: string;
  }[];
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
}

const props = withDefaults(defineProps<PropType>(), {
  noCheckIcon: false,
  setInline: false,
  defaultIndex: -1,
  rearImages: () => [
    {
      unchecked: '',
      checked: '',
    }
  ]
})

const computedStyled = computed(() => {
  const style = {} as CSSProperties;
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
  if (props.maxWidth) style.maxWidth = typeof props.maxWidth === 'number' ? props.maxWidth + 'px' : props.maxWidth
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  return style;
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <ul 
    class="mRadioButtonGroup" 
    :class="{ setInline: setInline }" 
    :style="computedStyled"
  >
    <li 
      v-for="(content, content_idx) in contents" 
      :key="content"
    >
      <div class="mLabel">
        <input type="radio" :id="content" :value="content" :name="name" :checked="defaultIndex !== -1 && (content_idx === defaultIndex)" />
        <label
          :class="{ mRButton: !noCheckIcon, mRNocheck: noCheckIcon }" 
          :for="content"
          @click="emit('update:modelValue', content_idx)"
        >

          <div v-if="content_idx < rearImages.length && rearImages[content_idx].checked" class="mLabel-type-2">
            <!-- rearImages -->
            {{ content }}
            <img class="rear-unchecked" :src="rearImages[content_idx].unchecked" />
            <img class="rear-checked" :src="rearImages[content_idx].checked" />
          </div>
          <div v-else>
            {{ content }}
          </div>
        </label>
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
  @include tiny {
    font-size: 14px;
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
  img {
    @include xs {
      width: 60px;
      height: 60px;
    }
    @include tiny {
      width: 42px;
      height: 42px;
    }
  }

  .mLabel {
    position: relative;
    width: 100%;
  }

  input[type="radio"] {
    display: none;

    &:checked {
      + .mRButton {
        border: 1px solid #ecf0ff;
        background: #ecf0ff;
        transition: 0.2s;
      }

      + .mRNocheck {
        border: 1px solid $color-basic;
        background: $color-basic;
        transition: 0.2s;
        color: white;
      }

      + .mRButton:before {
        border: 1px solid $color-basic;
        background: $color-basic;
      }

      + label .rear-unchecked  {
        display: none !important;
      }

      + label .rear-checked {
        display: block !important;
      }
    }
  }

  label {
    padding: 20px 10px 23px 62px;
    display: block;
    position: relative;
    border: 1px solid #e9e9e9;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #f5faff;
    }
  }

  .mRNocheck {
    padding: 20px 0;
    text-align: center;
  }

  .mRButton {
    padding: 24px 10px 24px 62px;

    @include smAndDown {
      padding: 18px 8px 18px 52px;
    }
    @include tiny {
      padding: 18px 8px 18px 40px;
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

.setInline {
  display: flex !important;
}
.setInline li {
  flex: 1;
  margin-right: 16px;
  
  &:last-child {
    margin-right: unset;
  }

  @include xs {
    margin-right: 8px;
  }
  @include tiny {
    margin-right: 4px;
  }
}

.rear-checked {
  display: none;
}

.mLabel-type-2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
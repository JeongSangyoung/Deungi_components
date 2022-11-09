<script setup lang="ts">
import { ref, watchEffect } from 'vue';
interface PropType {
  modelValue?: number;
  name: string;
  contents: string[];
  setInline?: boolean;
}

const props = withDefaults(defineProps<PropType>(), {
  modelValue: -1,
  setInline: false,
})

const emit = defineEmits(['update:modelValue'])
const radio = ref<number>(-1);
watchEffect(() => {
  radio.value = props.modelValue;
})

</script>

<template>
<ul class="mRadioGroup" :class="{ setInline: setInline }" >
  <li 
    v-for="(content, content_idx) in contents" 
    :class="{ 'pr-3': setInline && content_idx < contents.length }"
    :key="content"
  >
    <div class="mLabel">
      <input type="radio"
        :value="content_idx"
        :id="`${content}_${name}`"
        :name="name"
        @input="emit('update:modelValue', content_idx)" 
        :checked="modelValue === content_idx"
      />
      <label :for="`${content}_${name}`"><div>{{ content }}</div></label>
    </div>
  </li>
</ul>
</template>

<style lang="scss" scoped>
.mRadioGroup {
  margin: 0;
  padding: 0;
  font-size: 20px;
  display: block;

  @include smAndDown {
    font-size: 18px;
  }

  @include xs {
    font-size: 14px;
  }

  li {
    list-style: none;
  }
}

.mLabel {
  input[type="radio"] {
    display: none;

    &:checked {
      + label:before {
        border: 1px solid $color-basic;
        background: $color-basic;
      }

      + label {
        color: $color-basic;
      }
    }
  }

  label {
    position: relative;
    color: #333;
    cursor: pointer;
    display: inline-block;

    > div {
      padding-left: 42px;
      line-height: 30px;

      @include smAndDown {
        padding-left: 32px;
      }
    }
    &:before {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
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
        width: 24px;
        height: 24px;
      }
    }

    &:after {
      content: "";
      width: 12px;
      height: 6px;
      position: absolute;
      top: 50%;
      left: 6px;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      margin-top: -8px;
      -webkit-transform: rotate(-45deg) translate(0, 50%);
      -ms-transform: rotate(-45deg) translate(0, 50%);
      transform: rotate(-45deg) translate(0, 50%);

      @include smAndDown {
        width: 10px;
        height: 5px;
        left: 4.5px;
      }
    }
  }
}

.setInline {
  display: flex !important;

  li {
    margin-right: 16px;

    @include smAndDown {
      margin-right: 12px;
    }

    &:last-child {
      margin-right: unset;
    }
  }
}
</style>
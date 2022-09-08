<script setup lang="ts">
import { ref } from 'vue';

interface PropType {
  modelValue: boolean;
  label: string;
}
const props = withDefaults(defineProps<PropType>(), {
  modelValue: false,
});

const check = ref<boolean>();
check.value = props.modelValue;

const emit = defineEmits(['update:modelValue']);

</script>

<template>
<div class="mCheck">
  <input type="checkbox"
    :id="label"
    v-model="check"
    @change="emit('update:modelValue', check)"
  />
  <label :for="label">
    <div>
      {{ label }}
    </div>
  </label>
</div>

</template>

<style lang="scss" scoped>
.mCheck {
  font-size: 20px;

  @include smAndDown {
    font-size: 18px;
  }

  @include xs {
    font-size: 14px;
  }


  input {
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

    > div{
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

</style>
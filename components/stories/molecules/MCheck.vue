<script setup lang="ts">
interface PropType {
  name: string;
  content: string;
  checked?: boolean;
}

withDefaults(defineProps<PropType>(), {
  checked: false,
})

const emit = defineEmits(['check'])
</script>

<template>
<div class="mCheck">
  <input type="checkbox"
    :id="name"
    :checked="checked" 
    @click="emit('check', $event.target.checked)" 
  />
  <label :for="name"><div>{{ content }}</div></label>
</div>
</template>

<style lang="scss" scoped>
.mCheck {
  input[type="checkbox"] {
    display: none;

    &:checked {
      + label:before {
        border: 1px solid #3a52b4;
        background: #3a52b4;
      }

      + label {
        color: #3a52b4;
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
    }
    &:before {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      // left: 22px;
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
    }
  }
}
</style>
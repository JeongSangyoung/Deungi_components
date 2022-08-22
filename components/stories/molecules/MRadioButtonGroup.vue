<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import MExpertTooltip from './MExpertTooltip.vue';

interface PropType {
  name: string;
  contents: string[];
  expertTooltipObjects?: IExpertTooltip[];
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

interface IExpertTooltip {
  image?: string;
  name: string;
  charge: string;
  content: string;
}

const props = withDefaults(defineProps<PropType>(), {
  expertTooltipObjects: () => [
    { 
      image: 'https://deungi24.com/img/illu_2.png', 
      name: '등기24',
      charge: '등기24변호사', 
      content: '' 
    }
  ],
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

const emit = defineEmits(['select'])
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
          @click="emit('select', content_idx)"
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
        
        <!-- expert Tooltip -->
        <div v-if="expertTooltipObjects[content_idx] && expertTooltipObjects[content_idx].content" class="tooltip">
          <MExpertTooltip
            :image="expertTooltipObjects[content_idx].image"          
            :name="expertTooltipObjects[content_idx].name"          
            :charge="expertTooltipObjects[content_idx].charge"          
          >
            <div v-html="expertTooltipObjects[content_idx].content" />
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

  input[type="radio"] {
    display: none;

    &:checked {
      + .mRButton {
        border: 1px solid #ecf0ff;
        background: #ecf0ff;
        transition: 0.2s;
      }

      + .mRNocheck {
        border: 1px solid #3a52b4;
        background: #3a52b4;
        transition: 0.2s;
        color: white;
      }

      + .mRButton:before {
        border: 1px solid #3a52b4;
        background: #3a52b4;
      }

       + label + .tooltip  {
        display: block;
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
  }

  .mRNocheck {
    padding: 24px 0;
    text-align: center;
  }

  .mRButton {
    padding: 24px 10px 24px 62px;
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

.setInline {
  display: flex !important;
}
.setInline li {
  flex: 1;
}

.rear-checked {
  display: none;
}

.mLabel-type-2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
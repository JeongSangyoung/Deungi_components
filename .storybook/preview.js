import { app } from '@storybook/vue3';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

app.directive('click-outside', {
  mounted(el, binding) {
    el.clickOutsideEvent = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value(event, el)
      }
    }
    // add Event Listeners
    document.addEventListener("click", el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent)
  }
})

const customViewports = {
  Us: {
    name: 'Ultra Small',
    styles: {
      width: '320px',
      height: '100%'
    },
    type: 'mobile'
  },
  Xs: {
    name: 'Extra Small',
    styles: {
      width: '600px',
      height: '100%',
    },
    type: 'mobile'
  },
  Sm: {
    name: 'Small',
    styles: {
      width: '960px',
      height: '100%',
    },
    type: 'mobile'
  },
  Md: {
    name: 'Mid',
    styles: {
      width: '1264px',
      height: '100%',
    },
    type: 'tablet'
  },
  Lg: {
    name: 'Large',
    styles: {
      width: '1904px',
      height: '100%',
    },
    type: 'desktop'
  },
}

export const parameters = {
  controls: { expanded: true },
  actions: { argTypesRegex: '^on.*'},
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS
    },
  },
  layout: 'fullscreen'
};
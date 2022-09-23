export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
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
})
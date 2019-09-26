const Alert = Vue.components('alert', {
  directives: {
    color: {
      bind: function(el, binding, vnode) {
        el.classList.add("alert-" + binding.value);
      }
    }
  },
  template: `
  <div class="alert" role="alert">
    <slot>
      Alert
    </slot>
  </div>`
});
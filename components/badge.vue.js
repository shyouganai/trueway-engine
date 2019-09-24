const Badge = Vue.components('alert', {
  directives: {
    color: {
      bind: function(el, binding, vnode) {
        el.classList.add("badge-" + binding.value);
      }
    },
    form: {
      bind: function(el, binding, vnode) {
        el.classList.add("badge-" + binding.value);
      }
    }
  },
  template: `
  <span class="badge">
    <slot>
      Alert
    </slot>
  </span>`
});
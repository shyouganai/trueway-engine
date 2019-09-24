const Button = Vue.component('btn', {
  directives: {
    type: {
      bind: function(el, binding, vnode) {
        el.type = binding.value;
      }
    },
    color: {
      bind: function(el, binding, vnode) {
        el.classList.add("btn-" + binding.value);
      }
    },
    size: {
      bind: function(el, binding, vnode) {
        el.classList.add("btn-" + binding.value);
      }
    }
  },
  template: `
  <button
    class="btn"
  ></button>`
});
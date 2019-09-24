const TextEdit = Vue.component('text-edit', {
  template: `
  <input
    type="text"
    class="form-control shadow-sm"
  >`
});

const NumberEdit = Vue.component('number-edit', {
  directives: {
    type: {
      bind: function(el, binding, vnode) {
        if (binding.value == "float")
          el.step = "0.01";
        else if (binding.value == "double")
          el.step = "0.0001";
      }
    }
  },
  template: `
  <input
    type="number"
    class="form-control shadow-sm"
  >`
});

const TextArea = Vue.component('text-area', {
  template: `
  <textarea
    class="form-control shadow-sm"
  >
  </textarea>`
});
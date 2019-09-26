const Container = Vue.component('container', {
  template: `
  <div class="container">
    <slot>
      Container
    </slot>
  </div>`
});

const ContainerFluid = Vue.component('container-fluid', {
  template: `
  <div class="container-fluid">
    <slot>
      Container Fluid
    </slot>
  </div>`
});

const ContainerFluidWithBackground = Vue.component('container-bg', {
  directives: {
    bg: {
      bind: function(el, binding, vnode) {
        el.style.backgroundImage = "url('" + binding.value + "')";
      }
    }
  },
  template: `
  <div class="col-12 col-lg-9 mx-auto">
    <slot>
      Container Fluid With Background
    </slot>
  </div>`
});

const Row = Vue.component('row', {
  template: `
  <div class="row">
    <slot>
      Row
    </slot>
  </div>`
});

const Col = Vue.component('col', {
  directives: {
    xs: function(el, binding, vnode) {
      el.classList.add("col-" + binding.value);
    },
    sm: function(el, binding, vnode) {
      el.classList.add("col-sm-" + binding.value);
    },
    md: function(el, binding, vnode) {
      el.classList.add("col-md-" + binding.value);
    },
    lg: function(el, binding, vnode) {
      el.classList.add("col-lg-" + binding.value);
    },
    xl: function(el, binding, vnode) {
      el.classList.add("col-xl-" + binding.value);
    },
  },
  template: `
  <div class="col">
    <slot>
      Col
    </slot>
  </div>`
});
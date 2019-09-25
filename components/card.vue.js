const Card = Vue.component('card', {
  directives: {
    shadow: {
      bind: function(el, binding, vnode) {
        if (binding.modifiers.sm)
          el.classList.add("shadow-sm");
        if (binding.modifiers.lg)
          el.classList.add("shadow-lg");
        if (binding.modifiers.lx)
          el.classList.add("shadow-lx");
      }
    }
  },
  template: `
  <div class="card">
    <div class="card-body">
      <slot>
        Card
      </slot>
    </div>
  </div>`
});
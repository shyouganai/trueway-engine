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
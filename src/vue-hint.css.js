const alignment = ['top', 'bottom', 'left', 'right']
const colors = ['error', 'success', 'info', 'warning']

function addClass(el, cl) {
  el.classList.add(cl)
}

function removeClass(el, cl) {
  el.classList.remove(cl)
}

function setup(el, binding, onlyValue) {
  el.setAttribute('aria-label', binding.value)

  if(onlyValue)
    return

  for(let key of alignment) {
    if(binding.modifiers[key]) {
      addClass(el, 'hint--' + key)
      break
    }
  }

  for(let key of colors) {
    if(binding.modifiers[key]) {
      addClass(el, 'hint--' + key)
      break
    }
  }

  if(binding.modifiers.always)
    addClass(el, 'hint--always')

  if(binding.modifiers.rounded)
    addClass(el, 'hint--rounded')

  if(binding.modifiers.no_animate)
    addClass(el, 'hint--no-animate')

  if(binding.modifiers.bounce)
    addClass(el, 'hint--bounce')
}

function clean(el, binding) {
  el.removeAttribute('aria-label')

  for(let key of alignment) {
    if(binding.modifiers[key]) {
      removeClass(el, 'hint--' + key)
    }
  }

  for(let key of colors) {
    if(binding.modifiers[key]) {
      removeClass(el, 'hint--' + key)
    }
  }

  if(binding.modifiers.always)
    removeClass(el, 'hint--always')

  if(binding.modifiers.rounded)
    removeClass(el, 'hint--rounded')

  if(binding.modifiers.no_animate)
    removeClass(el, 'hint--no-animate')

  if(binding.modifiers.bounce)
    removeClass(el, 'hint--bounce')
}

export default {
  bind(el, binding) {
    if(binding.value)
      setup(el, binding)
  },

  update(el, binding) {
    if(binding.value) {
      if(!binding.oldValue)
        setup(el, binding)
      else
        setup(el, binding, true)
    }
    else
      clean(el, binding)
  }
}
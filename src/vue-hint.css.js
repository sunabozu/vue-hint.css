function setup(el, binding, onlyValue) {
  el.setAttribute('aria-label', binding.value)

  if(onlyValue)
    return

  for(let key of Object.keys(binding.modifiers)) {
    if(key === 'no_animate')
      key = 'no-animate'

    el.classList.add('hint--' + key)
  }
}

function clean(el, binding) {
  el.removeAttribute('aria-label')

  for(let key of Object.keys(binding.modifiers)) {
    if(key === 'no_animate')
      key = 'no-animate'

    el.classList.remove('hint--' + key)
  }
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
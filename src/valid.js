export default {
  noteTitle: { min: 2, max: 100, required: true },
  todoTitle: { min: 1, required: true },

  isValid(type, str){
    str = str.trim()
    const rules = this[type]
    let errors = []

    if (typeof rules.required == 'boolean' && rules.required && !str) errors.push(`Поле нужно заполнить`)
    if (typeof rules.min == 'number' && str.length < rules.min) errors.push(`Поле должно содержать более ${rules.min} символов`)
    if (typeof rules.max == 'number' && str.length > rules.max) errors.push(`Поле должно содержать менее ${rules.max} символов`)

    return {
      errors,
      status: !errors.length
    }
  },
}
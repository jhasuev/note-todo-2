<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :checked=checked
      @change.stop="$emit('change', $event.target.checked)"
    >
    <i class="checkbox__icon" />
  </label>
</template>

<script>

export default {
  name: 'Checkbox',
  props: {
    checked: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>

.checkbox {
  position: relative;
  z-index: 1;
  display: inline-block;
  font-size: 0;

  &__input {
    position: absolute;
    visibility: hidden;
  }

  &__icon {
    position: relative;
    z-index: 1;
    
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 2px;

    border: 1px solid #eee;
    transition: .2s;

    &::after {
      content: "";
      position: absolute;
      left: 2px;
      top: 3px;
      width: 9px;
      height: 4px;
      border: 2px solid #ddd;
      border-top: none;
      border-right: none;

      transform: rotate(-45deg);

      opacity: 0;
      transition: opacity .2s;
    }
  }

  &__input:checked ~ &__icon {
    background-color: #333;
    border-color: #333;

    &::after {
      opacity: 1;
    }
  }
}

</style>

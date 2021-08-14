<template>

  <input type="text" class="form-field" placeholder="Текстовое поле">
  <button class="btn">Кнопка по дефолту</button>
  <button class="btn  btn--green">Зеленая кнопка</button>
  <button class="btn  btn--red">Красная кнопка</button>

  <label class="checkbox">
    <input type="checkbox" class="checkbox__input">
    <i class="checkbox__icon" />
  </label>

  <label class="checkbox">
    <input type="checkbox" class="checkbox__input" checked>
    <i class="checkbox__icon" />
  </label>


</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>

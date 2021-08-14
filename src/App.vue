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


  <div class="card">
    <h2 class="card__title">Создание заметки</h2>
    <div class="add">
      <input type="text" class="form-field" placeholder="Название заметки">
      <div class="add__todos">
        <div class="add__todos-list">
          <div class="add__todos-item">
            <input type="text" class="form-field  add__todos-field" placeholder="Название пункта">
          </div>
          <div class="add__todos-item">
            <input type="text" class="form-field  add__todos-field" placeholder="Название пункта">
          </div>
        </div>
        <button class="btn add__todos-btn">Добавить пункт</button>
      </div>
      <div class="add__submit-wrapper">
        <button class="btn btn--green">Создать заметку</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>

.card {
  max-width: 400px;
  margin: 15px auto;
  padding: 15px;
  box-shadow: 0 0 5px rgba(0,0,0,.25);

  &__title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 15px;
  }
}

.add {
  &__todos {
    margin-top: 20px;
    border: 1px solid #eee;
    padding: 15px;

    &-item {
      margin-bottom: 10px;
    }
    &-btn {
      width: 100%;
    }
  }
  &__submit-wrapper {
    margin-top: 20px;
    text-align: right;
  }
}


</style>

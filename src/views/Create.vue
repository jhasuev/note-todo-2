<template>
  <card title="Создание заметки">
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
        <button class="btn btn--full add__todos-btn">Добавить пункт</button>
      </div>
      <div class="add__submit-wrapper">
        <button class="btn btn--green">Создать заметку</button>
      </div>
    </div>
  </card>
</template>

<script>
export default {
  name: "Create",
}
</script>

<style lang="scss" scoped>

.add {
  &__todos {
    margin-top: 20px;
    border: 1px solid #eee;
    padding: 15px;

    &-item {
      margin-bottom: 10px;
    }
  }
  &__submit-wrapper {
    margin-top: 20px;
    text-align: right;
  }
}

</style>
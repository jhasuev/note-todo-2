<template>
  <card title="Изменения заметки">
    <div class="edit">
      <input type="text" class="form-field" placeholder="Название заметки">
      <div class="edit__todos">
        <div>
          <todo-item class="edit__todos-item" v-for="n in 5" :key="n" />
        </div>
        <button class="btn btn--full edit__todos-add-btn">Добавить пункт</button>
      </div>
      <div class="edit__actions">
        <!-- скрывать и показывать кнопки взависимости от состояния -->
        <button class="btn btn--full btn--green  edit__actions-btn">Сохранить</button>
        <button class="btn btn--full btn--red  edit__actions-btn">Отменить редактирование</button>
        <button class="btn btn--full btn--red  edit__actions-btn">Удалить</button>
        <button class="btn btn--full btn--red  edit__actions-btn">Отменить внесенное изменение</button>
        <button class="btn btn--full edit__actions-btn">Повторить отмененное изменение</button>
      </div>
    </div>
  </card>
</template>

<script>
import TodoItem from "@/components/todo-item"
export default {
  name: "Edit",
  components: {
    TodoItem,
  },
}
</script>

<style lang="scss" scoped>

.edit {
  &__todos {
    margin-top: 20px;
    border: 1px solid #eee;
    padding: 15px;

    &-item {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-add-btn {
      margin-top: 10px;
    }
  }
  &__actions {
    &-btn {
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}


</style>
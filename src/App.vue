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
        <button class="btn add__todos-btn">Добавить пункт</button>
      </div>
      <div class="add__submit-wrapper">
        <button class="btn btn--green">Создать заметку</button>
      </div>
    </div>
  </card>

  <card title="Изменения заметки">
    <div class="edit">
      <input type="text" class="form-field edit__title-field" placeholder="Название заметки">
      <div class="edit__todos">
        <div class="edit__todos-list">
          <todo-item class="edit__todos-item" v-for="n in 5" :key="n" />
        </div>
        <button class="btn edit__todos-add-btn">Добавить пункт</button>
      </div>
      <div class="edit__actions">
        <!-- скрывать и показывать кнопки взависимости от состояния -->
        <button class="btn  btn--green  edit__actions-btn">Сохранить</button>
        <button class="btn  btn--red  edit__actions-btn">Отменить редактирование</button>
        <button class="btn  btn--red  edit__actions-btn">Удалить</button>
        <button class="btn  btn--red  edit__actions-btn">Отменить внесенное изменение</button>
        <button class="btn  edit__actions-btn">Повторить отмененное изменение</button>
      </div>
    </div>
  </card>
  

  <div class="notes">

    <card title="Все заметки">
      <card class="notes__item" v-for="n in 2" :key="n">
        <div class="notes__title">Название заметки 12678Название заметки 12678Название заметки 12678Название заметки 12678</div>
        <div class="notes__todos">
          <div class="notes__todos-item">– Название пункта Название пункта Название пункта Название пункта Название пункта </div>
          <div class="notes__todos-item">– Название пункта Название пункта Название пункта Название пункта Название пункта </div>
          <div class="notes__todos-item">– Название пункта Название пункта Название пункта Название пункта Название пункта </div>
        </div>
        <div class="notes__actions">
          <button class="btn notes__actions-item">Редактировать</button>
          <button class="btn btn--red notes__actions-item">Удалить</button>
        </div>
      </card>

    </card>
  </div>

</template>

<script>
import TodoItem from "@/components/todo-item"
export default {
  name: 'App',
  components: {
    TodoItem,
  },
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
    &-btn {
      width: 100%;
    }
  }
  &__submit-wrapper {
    margin-top: 20px;
    text-align: right;
  }
}

.edit {
  &__title-field {}
  &__todos {
    margin-top: 20px;
    border: 1px solid #eee;
    padding: 15px;

    &-list {}
    &-item {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-add-btn {
      margin-top: 10px;
      width: 100%;
    }
  }
  &__actions {
    &-btn {
      width: 100%;
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}


.notes {
  margin-top: 30px;
  &__item {
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__title {
    font-size: 15px;
  }
  &__todos {
    margin-top: 15px;
    &-item {
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1;
    }
  }
  &__actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 360px) {
      flex-direction: column;
      &-item {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

</style>

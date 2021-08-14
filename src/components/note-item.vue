<template>
  <card class="note">
    <div class="note__title">Название заметки 12678Название заметки 12678Название заметки 12678Название заметки 12678</div>
    <div class="note__todos">
      <div class="note__todos-item">– Название пункта Название пункта Название пункта Название пункта Название пункта </div>
      <div class="note__todos-item">– Название пункта Название пункта Название пункта Название пункта Название пункта </div>
      <div class="note__todos-item">– Название пункта Название пункта Название пункта Название пункта Название пункта </div>
    </div>
    <div class="note__actions">
      <button class="btn note__actions-item">Редактировать</button>
      <button class="btn btn--red note__actions-item">Удалить</button>
    </div>
  </card>
</template>

<script>
export default {
  name: "Note",
}
</script>

<style lang="scss" scoped>

.note {
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
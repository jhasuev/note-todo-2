<template>
  <div class="todo">
    <div class="todo__checkbox">
      <checkbox />
    </div>
    <input type="text" class="form-field  todo__field" placeholder="Название заметки">
    <button class="btn btn--red" title="Удалить">&times;</button>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  align-items: center;

  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &__checkbox {
    margin-right: 10px;
  }
  &__field {
    margin-right: 10px;
  }
}

</style>

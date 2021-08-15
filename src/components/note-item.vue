<template>
  <card class="note">
    <div class="note__title">{{ note.title }}</div>
    <div class="note__todos">
      <div
        v-for="(todo, i) in getTodos"
        :key=i
        class="note__todos-item"
      >– {{ todo }}</div>
    </div>
    <div class="note__actions">
      <button @click="onEdit" class="btn note__actions-item">Редактировать</button>
      <button @click="onRemove" class="btn btn--red note__actions-item">Удалить</button>
    </div>
  </card>
</template>

<script>
const TODOS_MAX_SHOW = 3
export default {
  name: "Note",
  props: {
    note: { type: Object, default: () => ({}) },
  },
  computed: {
    getTodos() {
      const todos = this.note.todos.map(todo => todo.title).filter((todo, i) => i < TODOS_MAX_SHOW)
      if (this.note.todos.length > TODOS_MAX_SHOW) todos.push("...")
      return todos
    },
  },
  methods: {
    onEdit() {
      this.$router.push({ name: 'edit', params: { id: this.note.id } })
    },

    onRemove() {
      this.$emit("remove")
    },
  },
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
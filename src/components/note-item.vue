<template>
  <card class="note">
    <div class="note__title">{{ note.title }}</div>
    <div class="note__todos">
      <div
        v-for="todo in getTodos"
        :key=todo.id
        class="note__todos-item"
        :class="{ done: todo.done }"
      >– {{ todo.title }}</div>
    </div>
    <div class="note__actions">
      <button @click="onEdit" class="btn note__actions-item">Редактировать</button>
      <button @click="onRemove" class="btn btn--red note__actions-item">Удалить</button>
    </div>
  </card>
</template>

<script>
import config from "@/config"
export default {
  name: "Note",
  props: {
    note: { type: Object, default: () => ({}) },
  },
  computed: {
    getTodos() {
      const todos = this.note.todos.filter((todo, i) => i < config.todosMaxShow)
      if (this.note.todos.length > config.todosMaxShow) {
        const last = todos.push(JSON.parse(config.todoItemTpl))
        todos[last - 1].title = "..."
      }
      return todos
    },
  },
  methods: {
    onEdit() {
      this.$emit("edit")
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

      &.done {
        text-decoration: line-through;
      }
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
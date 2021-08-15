<template>
  <div class="todo">
    <div class="todo__checkbox">
      <checkbox
        :checked=done
        @change="onCheckboxChange"
      />
    </div>
    <input
      type="text"
      class="form-field  todo__field"
      :class="{ done }"
      placeholder="Название заметки"
      :value=title
      @input.stop="onTitleChange($event.target.value)"
    >
    <button
      class="btn btn--red"
      title="Удалить"
      @click="$emit('remove')"
    >&times;</button>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',
  props: {
    title: { type: String, default: "" },
    done: { type: Boolean, default: false },
  },
  methods: {
    onCheckboxChange(state){
      this.$emit("done", state)
    },

    onTitleChange(title){
      this.$emit("title", title)
    },
  },
}
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  align-items: center;
  
  &__checkbox {
    margin-right: 10px;
  }
  &__field {
    margin-right: 10px;

    &.done {
      text-decoration: line-through;
    }
  }
}

</style>

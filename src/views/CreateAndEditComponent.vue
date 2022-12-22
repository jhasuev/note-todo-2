<template>
  <card :title="isCreate ? 'Создание заметки' : 'Изменение заметки'">
    <div class="edit">
      <input type="text" class="form-field" placeholder="Название заметки" v-model="note.title">

      <form-errors
        v-if="note.title && getNoteTitleValidInfo.errors.length"
        :errors=getNoteTitleValidInfo.errors
      />

      <div class="edit__todos">
        <div>
          <todo-item
            v-for="todo, i in note.todos"
            :key=todo.id
            class="edit__todos-item"

            v-bind=todo
            
            @done="onDone(i, $event)"
            @title="onTodoTitleChange(i, $event)"
            @remove="onTodoItemRemove(i)"
          />
        </div>
        <button
          class="btn btn--full edit__todos-add-btn"
          :disabled=!canAddTodoItem
          @click=onClickAddTodoItem
        >Добавить пункт</button>
      </div>

      <div class="edit__actions">
        <button
          class="btn btn--full btn--green  edit__actions-btn"
          :disabled="!canSubmit"
          @click=save
        >{{ isCreate ? 'Создать' : 'Сохранить' }}</button>

        <button
          v-if="canRedo"
          class="btn btn--full btn--red  edit__actions-btn"
          @click=redo
        >Отменить внесенное изменение</button>

        <button
          v-if="canUndo"
          @click=undo
          class="btn btn--full edit__actions-btn"
        >Повторить отмененное изменение</button>
      </div>

      <div v-if="!isCreate" class="edit__actions">
        <button class="btn btn--full  edit__actions-btn" @click=cancel>Отменить редактирование</button>
        <button class="btn btn--full btn--red  edit__actions-btn" @click=remove>Удалить</button>
      </div>
    </div>
  </card>

  <confirm-popup ref="confirm" />
</template>

<script>
import config from "@/config"
import TodoItem from "@/components/todo-item"
import ConfirmPopup from "@/components/confirm-popup"
import Validation from "@/valid"

export default {
  name: "CreateAndEditComponent",
  components: {
    TodoItem,
    ConfirmPopup,
  },
  props: {
    noteData: { type: Object },
    isCreate: { type: Boolean },
  },
  data() {
    return {
      originNote: "",
      redidNote: "",
      note: undefined,
    }
  },
  watch: {
    note: {
      handler() {
        if(this.redidNote && this.canRedo) {
          this.redidNote = ""
        }
      },
      deep: true,
    },
  },
  computed: {
    getNoteTitleValidInfo() {
      return Validation.isValid("noteTitle", this.note.title)
    },

    hasChanges() {
      return JSON.stringify(this.note) !== this.originNote
    },

    canSubmit() {
      return this.hasChanges && Validation.isValid("noteTitle", this.note.title).status
    },

    canRedo() {
      return !this.isCreate && this.hasChanges
    },

    canUndo() {
      return !this.isCreate && this.redidNote
    },

    canAddTodoItem(){
      const lastTodoItem = this.note.todos[ this.note.todos.length - 1 ]
      if(!lastTodoItem) return true
      return Validation.isValid("todoTitle", lastTodoItem?.title ?? '').status
    },
  },
  created() {
    this.init()
  },

  methods: {
    init(noteData) {
      this.note = JSON.parse(JSON.stringify(noteData ?? this.noteData))
      this.originNote = JSON.stringify(this.note)
      this.redidNote = ''
    },

    save() {
      if (this.canSubmit) {
        this.note.todos = this.note.todos.filter(todo => Validation.isValid("todoTitle", todo.title).status)
        this.$emit('save', this.note)
        this.init(this.note)
      }
    },

    onDone(i, state) {
      this.note.todos[i].done = state
    },

    onTodoTitleChange(i, title) {
      this.note.todos[i].title = title
    },

    onTodoItemRemove(i) {
      this.note.todos.splice(i, 1)
    },

    redo() {
      this.redidNote = JSON.stringify(this.note)
      this.note = JSON.parse(this.originNote)
    },

    undo() {
      this.note = JSON.parse(this.redidNote)
      this.redidNote = ""
    },

    cancel() {
      this.$refs.confirm.show({
        text: "Вы точно хотите отменить редактирование? Изменения будут потеряны.",
      }).then(() => {
        this.$emit('cancel')
      })
    },

    remove() {
      this.$refs.confirm.show({
        text: "Вы точно хотите удалить эту заметку?",
      }).then(() => {
        this.$emit('remove', this.note.id)
      })
    },

    addTodoItem(){
      this.note.todos.push(JSON.parse( config.todoItemTpl ))
    },

    onClickAddTodoItem(){
      if (this.canAddTodoItem) {
        this.addTodoItem()
      }
    },
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
    margin-top: 20px;
    &-btn {
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

</style>
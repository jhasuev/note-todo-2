<template>
  <card title="Изменения заметки">
    <div class="edit">
      <input type="text" class="form-field" placeholder="Название заметки" v-model="note.title">
      <div class="edit__todos">
        <div>
          <todo-item
            v-for="todo, i in note.todos"
            :key="i"
            class="edit__todos-item"

            :done=todo.done
            :title=todo.title
            
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
          :disabled="!canSave"
          @click=save
        >Сохранить</button>

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

      <div class="edit__actions">
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
import { mapActions, mapGetters } from "vuex"
export default {
  name: "Edit",
  components: {
    TodoItem,
    ConfirmPopup,
  },
  props: {
    id: { type: [Number, String], required: true }
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
    ...mapGetters([ 'getNoteById', 'getNotes' ]),

    hasChanges() {
      return JSON.stringify(this.note) !== this.originNote
    },

    canSave() {
      return this.hasChanges && Validation.isValid("noteTitle", this.note.title).status
    },

    canRedo() {
      return this.hasChanges
    },

    canUndo() {
      return this.redidNote
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
    ...mapActions([ 'saveNote', 'removeNote' ]),

    init() {
      this.note = JSON.parse(JSON.stringify(this.getNoteById(Number(this.id))))
      this.originNote = JSON.stringify(this.note)
      this.redidNote = ''
    },

    save() {
      if (this.canSave) {
        this.note.todos = this.note.todos.filter(todo => Validation.isValid("todoTitle", todo.title).status)
        this.saveNote(this.note)
        this.init()
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
        title: "Подтверждение",
        text: "Вы точно хотите отменить редактирование? Изменения будут потеряны.",
        yesBtn: "Да",
        noBtn: "Нет",
      }).then(() => {
        this.$router.push({ name: 'home' })
      })
    },
    
    remove() {
      this.$refs.confirm.show({
        title: "Подтверждение",
        text: "Вы точно хотите удалить эту заметку?",
        yesBtn: "Да",
        noBtn: "Нет",
      }).then(() => {
        this.removeNote(this.note.id)
        this.$router.push({ name: 'home' })
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
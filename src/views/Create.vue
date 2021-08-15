<template>
  <card title="Создание заметки">
    <div class="add">
      <input type="text" class="form-field" placeholder="Название заметки" v-model.trim=note.title>
      
      <form-errors
        v-if="note.title && getNoteTitleValidInfo.errors.length"
        :errors=getNoteTitleValidInfo.errors
      />

      <div class="add__todos">
        <div class="add__todos-list">
          <div
            v-for="(todo, i) in note.todos"
            :key=i
            class="add__todos-item"
          >
            <input type="text" class="form-field  add__todos-field" placeholder="Название пункта" v-model.trim=todo.title>
          </div>
        </div>
        <button
          class="btn btn--full add__todos-btn"
          :disabled=!canAddTodoItem
          @click=onClickAddTodoItem
        >Добавить пункт</button>
      </div>
      <div class="add__submit-wrapper">
        <button
          class="btn btn--green"
          :disabled=!canCreateNote
          @click=onCreateNote
        >Создать заметку</button>
      </div>
    </div>
  </card>
</template>

<script>
const TODO_ITEM = '{ "title": "", "done": false }'
import Validation from "@/valid"
import { mapActions } from "vuex"
export default {
  name: "Create",
  data(){
    return {
      note: {
        title: "",
        todos: []
      },
      Validation,
    }
  },
  computed: {
    canCreateNote(){
      return this.getNoteTitleValidInfo.status
    },

    getNoteTitleValidInfo() {
      return Validation.isValid("noteTitle", this.note.title)
    },

    canAddTodoItem(){
      const lastTodoItem = this.note.todos[ this.note.todos.length - 1 ]
      return Validation.isValid("todoTitle", lastTodoItem?.title ?? '').status
    },
  },
  mounted(){
    this.addTodoItem()
  },
  methods: {
    ...mapActions([ 'addNote' ]),

    addTodoItem(){
      this.note.todos.push(JSON.parse(  TODO_ITEM  ))
    },

    onClickAddTodoItem(){
      if (this.canAddTodoItem) {
        this.addTodoItem()
      }
    },

    onCreateNote(){
      if (this.canCreateNote) {
        // create it!
        this.note.todos = this.note.todos.filter(todo => Validation.isValid("todoTitle", todo.title).status)
        this.addNote(this.note)
        this.$router.push({ name: 'home' })
      }
    },
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
  }
  &__submit-wrapper {
    margin-top: 20px;
    text-align: right;
  }
}

</style>
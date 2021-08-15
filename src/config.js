export default {
  noteTitle: { min: 2, max: 100, required: true },
  todoTitle: { min: 1, required: true },
  todosMaxShow: 3,
  todoItemTpl: '{ "title": "", "done": false }',
  localStorageKey: "note-todo-2-key"
}
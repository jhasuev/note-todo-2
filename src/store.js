import { createStore } from "vuex"
import config from "./config";

const NOTES_FOR_EXAMPLE = JSON.stringify([
  {
    id: 1,
    title: "Планы на сегодня",
    todos: [
      { title: "Посмотреть Рика и Морти", done: true },
      { title: "Пойти на речку", done: false },
      { title: "Приготовить покушать", done: true },
    ],
  },
  {
    id: 2,
    title: "Купить",
    todos: [
      { title: "Молоко", done: false },
      { title: "Яйца", done: false },
      { title: "Сливочное масло", done: true },
      { title: "Хлеб", done: true },
      { title: "Томат", done: true },
    ],
  },
  {
    id: 3,
    title: "Ничего не делать",
    todos: [
      { title: "Позавчера делать", done: true },
      { title: "Вчера делать", done: true },
      { title: "Сегодня делать", done: false },
    ],
  },
])

const store = createStore({
  state: {
    notes: JSON.parse(localStorage[config.localStorageKey] || NOTES_FOR_EXAMPLE) ,
  },
  
  getters: {
    getNotes: state => state.notes,

    getNoteById: state => id => state.notes.find(note => note.id == id),
  },
  
  mutations: {
    ADD_NOTE(state, note) {
      const id = state.notes.reduce((currentId, note) => currentId < note.id ? note.id : currentId, 0) + 1
      state.notes.unshift({ id, ...note })
    },

    SAVE_NOTE(state, note) {
      const noteIndex = state.notes.findIndex(_note => _note.id == note.id)
      state.notes[noteIndex] = note
    },

    REMOVE_NOTE(state, noteId) {
      state.notes = state.notes.filter(note => note.id != noteId)
    },

    SAVE(state) {
      localStorage[config.localStorageKey] = JSON.stringify(state.notes)
    },
  },

  actions: {
    addNote({ commit }, note) {
      commit("ADD_NOTE", note)
      commit("SAVE")
    },
    
    saveNote({ commit }, note) {
      commit("SAVE_NOTE", note)
      commit("SAVE")
    },
    
    removeNote({ commit }, noteId) {
      commit("REMOVE_NOTE", noteId)
      commit("SAVE")
    },
  },
})

export default store
import { createStore } from "vuex"

const store = createStore({
  state: {
    notes: [
      {
        id: 1,
        title: "Note 1",
        todos: [
          { title: "Finish this note 1", done: false },
          { title: "Finish this note 2", done: false },
          { title: "Finish this note 3", done: false },
          { title: "Finish this note 4", done: false },
        ],
      },
      {
        id: 2,
        title: "Note 2",
        todos: [
          { title: "Finish this note 1", done: false },
          { title: "Finish this note 2", done: false },
          { title: "Finish this note 3", done: false },
          { title: "Finish this note 4", done: false },
        ],
      },
    ],
  },
  
  getters: {
    getNotes: state => state.notes
  },
  
  mutations: {
    REMOVE_NOTE(state, noteId) {
      state.notes = state.notes.filter(note => note.id != noteId)
    },
  },

  actions: {
    removeNote({ commit }, noteId) {
      commit("REMOVE_NOTE", noteId)
    },
  },
})

export default store
<template>
  <create-and-edit-component
    :key="+isCreate"
    :is-create="isCreate"
    :noteData="note"
    @save="save($event)"
    @cancel="cancel"
    @remove="remove($event)"
  />
</template>

<script>
import config from "@/config"
import { mapActions, mapGetters } from "vuex"
import CreateAndEditComponent from './CreateAndEditComponent'

export default {
  name: "CreateAndEditIndex",
  
  components: {
    CreateAndEditComponent,
  },
  
  props: {
    id: { type: [Number, String] }
  },

  data() {
    return {
      note: null,
    }
  },

  computed: {
    ...mapGetters([ 'getNoteById' ]),

    isCreate() { return !this.id },
  },

  watch: {
    id() {
      this.init()
    },
  },

  created() {
    this.init()
  },

  methods: {
    ...mapActions([ 'addNote', 'saveNote', 'removeNote' ]),

    init() {
      let note = null

      if (this.isCreate) {
        note = { title: "", todos: [ JSON.parse(config.todoItemTpl) ] }
      } else {
        note = this.getNoteById(Number(this.id))
      }

      if (!note) return this.$router.push({ name: 'home' })

      this.note = JSON.parse(JSON.stringify(note))
    },

    save(note) {
      if (this.isCreate) {
        this.addNote(note)
        this.$router.push({ name: 'home' })
      } else {
        this.saveNote(note)
      }
    },

    cancel() {
      this.$router.push({ name: 'home' })
    },
    
    remove(id) {
      this.removeNote(id)
      this.$router.push({ name: 'home' })
    },
  },
}
</script>

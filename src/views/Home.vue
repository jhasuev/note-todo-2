<template>
  <div class="notes">
    <div class="notes__create-btn-wrapper">
      <button class="btn" @click="goToCreate()">+ Создать заметку</button>
    </div>
    <card title="Все заметки">
      <div>
        <note-item
          v-for="note in getNotes"
          :key=note.id
          :note=note
          @remove=remove(note.id)
          @edit=onEdit(note.id)
          class="notes__item"
        />
      </div>
    </card>
  </div>

  <confirm-popup ref="confirm" />
</template>

<script>
import NoteItem from '../components/note-item'
import ConfirmPopup from "@/components/confirm-popup"
import { mapGetters, mapActions } from "vuex"
export default {
  name: "Home",
  components: {
    NoteItem,
    ConfirmPopup,
  },
  computed: {
    ...mapGetters([ 'getNotes' ])
  },
  methods: {
    ...mapActions([ 'removeNote' ]),

    remove(noteId) {
      this.$refs.confirm.show({
        title: "Подтверждение",
        text: "Вы точно хотите удалить эту заметку?",
        yesBtn: "Да",
        noBtn: "Нет",
      }).then(() => {
        this.removeNote(noteId)
      })
    },

    onEdit(noteId) {
      this.$router.push({ name: 'edit', params: { id: noteId } })
    },

    goToCreate() {
      this.$router.push({ name: 'create' })
    },
  },
}
</script>

<style lang="scss" scoped>

.notes {
  &__create-btn-wrapper {
    padding-top: 15px;
    text-align: right;
    max-width: 400px;
    margin: auto;
  }

  &__item {
    &:last-child {
      margin-bottom: 0;
    }
  }
}

</style>

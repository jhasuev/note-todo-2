<template>
  <div class="notes">
    <div class="notes__create-btn-wrapper">
      <button class="btn">+ Создать заметку</button>
    </div>
    <card title="Все заметки">
      <div>
        <note-item
          v-for="note in getNotes"
          :key=note.id
          :note=note
          @remove=onRemove(note.id)
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

    async onRemove(noteId) {
      try {
        await this.$refs.confirm.show({
          title: "Подтверждение",
          text: "Вы точно хотите удалить эту заметку?",
          yesBtn: "Да",
          noBtn: "Нет",
        })

        this.removeNote(noteId)
        console.log(`note with id ${noteId} was removed...`)
      } catch (e) {
        console.log(`note with id ${noteId} was not removed...`)
      }
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

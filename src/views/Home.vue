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
          class="notes__item"
        />
      </div>
    </card>
  </div>
</template>

<script>
import NoteItem from '../components/note-item'
import { mapGetters } from "vuex"
export default {
  name: "Home",
  components: {
    NoteItem,
  },
  computed: {
    ...mapGetters([
      'getNotes',
    ])
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
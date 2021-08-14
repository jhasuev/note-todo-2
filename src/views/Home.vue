<template>
  <div class="notes">
    <div class="notes__create-btn-wrapper">
      <button class="btn">+ Создать заметку</button>
    </div>
    <card title="Все заметки">
      <div>
        <note-item class="notes__item" v-for="n in 2" :key="n" />
      </div>
    </card>
  </div>
</template>

<script>
import NoteItem from '../components/note-item'
export default {
  components: {
    NoteItem,
  },
  name: "Home",
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
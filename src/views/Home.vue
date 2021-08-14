<template>
  <div class="notes">
    <card title="Все заметки">
      <div class="notes__create-btn-wrapper">
        <button class="btn btn--green">+ Создать заметку</button>
      </div>
      <div>
        <note-item class="notes__item" v-for="n in 2" :key="n" />
      </div>
    </card>
  </div>
</template>

<script>
import NoteItem from '../components/note-item.vue'
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
    text-align: center;
    margin-bottom: 25px;
  }

  &__item {
    &:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
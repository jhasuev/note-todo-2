<template>
  <div class="card">
    <h2 v-if="title" class="card__title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    title: { type: String, default: "" },
  },
}
</script>

<style lang="scss" scoped>

.card {
  max-width: 400px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0,0,0,.25);

  &__title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 15px;
  }
}

</style>

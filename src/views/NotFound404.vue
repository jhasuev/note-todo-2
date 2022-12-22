<template>
  <card title="404">
    <div class="text">
      Упс...ничего не найдено
    </div>
    <div>
      <button class="btn  btn--full">Перейти на главную</button>
    </div>
  </card>
</template>

<script lang="js">
export default {
  name: "NotFound404",
}
</script>

<style lang="scss" scoped>
  .text {
    text-align: center;
  }
  .btn {
    margin-top: 10px;
  }
</style>

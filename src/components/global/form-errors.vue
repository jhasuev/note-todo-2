<template>
  <div class="errors">
    <div
      v-for="error, i in errors"
      :key=i
    >– {{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "FormErrors",
  props: {
    errors: {type: Array, default: () => []},
  }
}
</script>

<style lang="scss" scoped>
.errors {
  padding: 5px 0 0 5px;
  font-size: 11px;
  color: #c00;
}
</style>
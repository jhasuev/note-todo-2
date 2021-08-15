<template>
  <transition name="fade" mode="in-out">
    <div v-if="show" class="popup">
      <div class="popup__inner">
        <card class="popup__content" :title=title>
          <slot />
        </card>
      </div>
      <i class="popup__bg" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "Popup",
  props: {
    title: { type: String, default: "" },
    show: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>

.popup {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;


  &__inner {
    width: 100%;
    max-height: 100%;
    padding: 15px;
  
    overflow-y: auto;
  }

  &__content {
    background-color: #fff;
    margin-bottom: 0;
  }

  &__bg {
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;

    background-color: #000;
    opacity: .75;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
<template>
  <popup :title=title v-model:show="popup">
    <div v-if="text" class="text">{{ text }}</div>
    <div class="btns">
      <button
        v-if="yesBtn"
        @click="onYes"
        class="btn btn--red btns__item"
      >{{ yesBtn }}</button>
      <button
        v-if="noBtn"
        @click="onNo"
        class="btn btn--green btns__item"
      >{{ noBtn }}</button>
    </div>
  </popup>
</template>

<script>
export default {
  name: 'ConfirmPopup',
  data(){
    return {
      title: "",
      text: "",
      yesBtn: "",
      noBtn: "",

      action: false,
      popup: false,

      resolve: undefined,
      reject: undefined,
    }
  },
  methods: {
    init(params){
      this.title = params.title
      this.text = params.text
      this.yesBtn = params.yesBtn
      this.noBtn = params.noBtn
      
      this.action = ''
      this.popup = true
    },

    reset(){
      this.title = ""
      this.text = ""
      this.yesBtn = ""
      this.noBtn = ""
      
      this.action = ''
      this.popup = false
    },
    
    show(params) {
      this.init(params)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },

    onYes() {
      this.reset()
      this.resolve()
    },

    onNo() {
      this.reset()
      this.reject()
    },
  },
}
</script>

<style lang="scss" scoped>

.text {
  text-align: center;
}

.btns {
  display: flex;
  justify-content: center;
  margin: 10px -10px 0;

  &__item {
    margin: 0 10px;
  }
}

</style>

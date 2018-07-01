<template>
  <button class="btn" @click="add()">{{text}}</button>
</template>

<script>
export default {
  data() {
    return {
      text: '商品を購入する'
    }
  },
  methods: {
    add: function() {
      console.log('paa!')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: $btn;
  border-bottom: 3px solid $btn-shadow;
  border-radius: 4px;
  color: $white;
  font-size: 14px;
  padding: 10px 15px;
}
</style>

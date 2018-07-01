<template>
  <span class="tag">タグです</span>
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
.tag {
  border: 1px solid $tag;
  border-radius: 4px;
  color: $tag;
  padding: 2px 5px;
}
</style>

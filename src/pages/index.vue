<template>
  <div>
    <section class="wrap">
      １ページ目
    </section>
    <section>
      2ぺーじめ
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Item from '~/components/panel/Item.vue'

export default {
  // components: {
  //   Item
  // },
  // computed: {
  //   ...mapState({
  //     loading: 'loading' //loadingというstateをloadingという名前で呼び出す
  //   }),
  //   ...mapGetters({
  //     init: 'getItems' //getItemsというgetterをinitという名前で呼び出す
  //   })
  // }
}
</script>

<style lang="scss" scoped>

</style>

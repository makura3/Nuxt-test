<template>
  <section class="wrap">
    <div v-if="loading" class="loading">
      <i class="fa fa-spinner fa-3x" aria-hidden="true"></i>
    </div>
    <transition-group v-else name="fade" tag="div" class="item-wrap">
      <Item v-for="(item, index) in init" :key="index" :item="item" />
    </transition-group>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Item from '~/components/panel/Item.vue'

export default {
  components: {
    Item
  },
  computed: {
    ...mapState({
      loading: 'loading' //loadingというstateをloadingという名前で呼び出す
    }),
    ...mapGetters({
      init: 'getItems' //getItemsというgetterをinitという名前で呼び出す
    })
  }
  // computed: mapState({
  //   // アロー関数は、コードをとても簡潔にできます！
  //   // count: state => state.count,
  //   // 文字列を渡すことは、`state => state.count` と同じです
  //   // countAlias: 'count',
  //   // `this` からローカルステートを参照するときは、通常の関数を使わなければいけません
  //   // loading: 'loading',
  //   init() {
  //     return this.$store.getters.getItems
  //   }
  // })
}
</script>

<style lang="scss" scoped>
.loading {
  align-items: center;
  color: $gray;
  display: flex;
  flex-basis: auto;
  height: 300px;
  justify-content: center;
}

.item-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 35px 10px;
}

.item {
  margin: 15px 5px;

  @include min-mq(sm) {
    margin: 15px 10px;
  }
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter {
  opacity: 0;
}
</style>

<template>
  <i v-if="getFavoriteData(id)" class="ic_heart fa fa-heart" @click.prevent="delClass(id, $event)"></i>
  <i v-else class="ic_heart fa fa-heart-o" @click.prevent="addClass(id, $event)"></i>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],
  computed: {
    ...mapGetters({
      getFavoriteData: 'getFavoriteData'
    })
  },
  methods: {
    ...mapActions({
      add: 'ADD_FAVORITE', // `this.add()` を `this.$store.dispatch('ADD_FAVORITE')` にマッピングする
      del: 'DEL_FAVORITE' // `this.del()` を `this.$store.dispatch('DEL_FAVORITE')` にマッピングする
    }),
    addClass(id, e) {
      //データの更新
      this.add(id)
      // e.target.classList.add('hoge')
      console.log(e)
    },
    delClass(id) {
      //データの更新
      this.del(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.ic_heart {
  color: $favorite;
  font-weight: 600;
  vertical-align: 0;
}

.favorite-count {
  color: $darkGray;
  font-size: 12px;
  margin-left: 3px;
}
</style>

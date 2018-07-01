<template>
  <nuxt-link :to="{ name:'items-id', params:{ id:item.id} }" class="item">
    <div>
      <img :src='"/images/items/"+item.url' class="images"/>
      <div class="content">
        <p class="title">{{ item.name }}</p>
      </div>
      <FavoriteIcon :id="item.id"/>
    </div>
  </nuxt-link>
</template>

<script>
import FavoriteIcon from '~/components/icon/favorite.vue'

export default {
  components: {
    FavoriteIcon
  },
  props: ['item']
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.item {
  background-color: $white;
  border: 1px solid $gray;
  box-shadow: 2px 5px 10px $shadow;
  cursor: pointer;
  padding: 10px;
  position: relative;

  .images {
    height: 300px;
    width: 200px;

    @include max-mq(sm) {
      height: 225px;
      width: 150px;
    }
  }

  .content {
    background: $white;
  }

  .title {
    color: $black;
    font-size: 14px;
    margin: 10px 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
    white-space: nowrap;

    @include max-mq(sm) {
      width: 150px;
    }
  }

  .ic_heart {
    background-color: $white;
    border-radius: 15px;
    bottom: 51px;
    right: 20px;
    padding: 8px;
    position: absolute;

    // @include min-mq(md) {
    //   &:hover {

    //   }
    // }
  }

  @include min-mq(md) {
    &:hover {
      box-shadow: none;
    }
  }
}
</style>

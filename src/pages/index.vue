<template>
  <div>
    <p v-for="(item, index) in init" :key="index">{{item.name}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      init: 'getItems'
    })
  }
}
</script>
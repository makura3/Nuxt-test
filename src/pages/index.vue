<template>
  <ul>
    <li v-for="(item,index) in init" :key="index">
      {{ item.id }}：{{ item.name }}
    </li>
  </ul>
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
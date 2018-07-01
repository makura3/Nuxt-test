<template>
  <div class="wrapper">
    <Header />

    <nuxt/>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: $lightGray;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>

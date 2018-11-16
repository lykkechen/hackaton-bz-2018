<template>
  <div>
    <the-header/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>


<style lang="scss">
@import "../assets/style/index.scss";
@import "~bulma";
</style>

<template>
  <div>
    <the-header/>
    <br>
    <div
      v-if="isRoot"
      class="content"
      style="margin-left: 2rem;">
      <a @click="$router.go(-1)"><h4 class="title">back</h4></a>
    </div>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheHeader
  },
  computed: {
    isRoot() {
      return this.$route.path !== '/'
    }
  },
  watch: {
    isRoot(newVal, oldVal) {
      debugger
    }
  },
}
</script>


<style lang="scss">
@import "../assets/style/index.scss";
@import "~bulma";
</style>

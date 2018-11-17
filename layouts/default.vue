<template>
  <div class="wrapper has-background-image">
    <the-header/>
    <br>
    <div class="is-expanded">
      <div
        v-if="isRoot"
        class="content"
        style="margin-left: 2rem;">
        <a @click="$router.go(-1)"><h4 class="title">back</h4></a>
      </div>
      <nuxt/>
    </div>
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

.wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.is-expanded {
  flex: 1;
}

.has-background-image {
    background-image: url("/images/index-bg.svg");
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>

<template>
  <div>
    <figure
      class="image is-64x64">
      <img
        :src="image"
        class="is-rounded has-shadow">
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.has-shadow {
  box-shadow: 0 10px 50px rgba(0,0,0,0.10);
}
</style>


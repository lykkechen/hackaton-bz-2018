<template>
  <div>
    <figure
      class="image is-64x64">
      <img
        :src="image"
        class="is-rounded">
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


<template>
  <button
    class="button is-squared is-bold"
    @click="onClick">
    {{ action }}
  </button>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick ($event) {
      this.$emit('click', $event)
    }
  }
}
</script>

<style lang="scss" scoped>
.is-squared {
  border-radius: 0 !important;
  border: 0;
  width: 200px;
  height: 80px;
  background-color: black;
}

.is-bold {
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
}
</style>


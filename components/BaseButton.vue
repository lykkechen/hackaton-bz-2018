<template>
  <button
    class="button"
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


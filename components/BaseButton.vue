<template>
  <nuxt-link
    @click="onClick"
    :to="to"
    class="button">
    {{ action }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick ($event) {
      this.$emit("click", $event);
    }
  }
}
</script>


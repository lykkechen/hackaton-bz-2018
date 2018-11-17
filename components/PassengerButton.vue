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
  width: 300px;
  height: 80px;
  background-color: #C1FFA4;
  box-shadow: 0 10px 20px rgba(32, 175, 72, 0.20);
  font-size: 1.5rem;
  color: #20af48;
  &:hover {
    background-color: darken( #C1FFA4, 10%);
    transition: all 500ms ease;
  }
  &:active {
    transform: translateY(0);
  }
}

.is-bold {
  font-weight: 700;
}
</style>


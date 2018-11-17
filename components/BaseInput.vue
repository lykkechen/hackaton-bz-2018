<template>
  <div>
    <label
      v-if="label"
      class="label">
      {{ label }}
    </label>
    <input
      :value="value"
      :placeholder="placeholder"
      class="input is-shadowless"
      type="text"
      @input="onInput">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput ($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  background-color: white;
  border-bottom: 2px solid black !important;
  box-shadow: 0;
  border-color: white;
  border-radius: 0;
  height: 50px;
  &:focus {
    background-color: white;
    border: 2px solid black !important;
  }
}
</style>



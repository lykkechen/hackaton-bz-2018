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
      class="input"
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


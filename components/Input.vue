<template>
  <div>
    <label
      v-if="label"
      class="label">
      {{ label }}
    </label>
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
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
    label: {
      type: String,
      dafault: null
    }
  },
  methods: {
    onInput() {
      $emit('input', $event.target.value)
    }
  }
}
</script>


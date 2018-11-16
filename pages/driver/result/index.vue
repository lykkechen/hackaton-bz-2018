<template>
  <div>
    <div class="content">
      <h1>Riepilogo</h1>
      <p>Partenza {{ driver.from }}</p>
      <p>Arrivo {{ driver.to }}</p>
      <p>Ore {{ driver.time }}</p>
      <p>Posti {{ driver.places }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    driver () {
      return this.$store.getters['driver']
    }
  }
}
</script>

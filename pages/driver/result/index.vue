<template>
  <section class="section">
    <div class="container">
      <div>
        <div>
          <div class="content">
            <h1>Riepilogo</h1>
            <p>Partenza {{ driver.from }}</p>
            <p>Arrivo {{ driver.to }}</p>
            <p>Ore {{ driver.time }}</p>
            <p>Posti {{ driver.places }}</p>
          </div>
          <div
            v-if="isPassangerNotificationVisible"
            class="notification">
            <button class="delete"/>
            <div class="content">
              <h2>Nuova richiesta</h2>
              <p>Nome: {{ passenger.name }}</p>
              <p>Cognome: {{ passenger.surname }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isPassangerNotificationVisible: false
    }
  },
  computed: {
    driver () {
      return this.$store.getters['driver']
    },
    passenger () {
      const pass = this.$store.getters['passengers']
      return pass[0]
    }
  },
  created () {
    setTimeout(() => {
      this.isPassangerNotificationVisible = true
    }, 2000)
  }
}
</script>

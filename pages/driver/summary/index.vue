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
            v-if="passengers.length > 0"
            class="content">
            <h2>Passeggeri</h2>
            <div
              v-for="passenger in passengers"
              :key="passenger.name">
              <p>Nome: {{ passenger.name }}</p>
              <p>Cognome: {{ passenger.surname }}</p>
            </div>
          </div>
          <div
            v-if="isPassangerNotificationVisible"
            class="notification">
            <button class="delete"/>
            <div
              class="content">
              <h2>Nuova richiesta</h2>
              <p>Nome: {{ pendingPassenger.name }}</p>
              <p>Cognome: {{ pendingPassenger.surname }}</p>
              <base-button
                action="Rifiuta"
                @click="rejectPassanger"/>
              <base-button
                action="Accetta"
                @click="approvePassenger"/>
            </div>
          </div>
          <div>
            <base-button
              action="Partenza"
              @click="$router.push('/driver/travelling')"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
export default {
  components: {
    BaseButton
  },
  data () {
    return {
      isPassangerNotificationVisible: false
    }
  },
  computed: {
    driver () {
      return this.$store.getters['driver']
    },
    pendingPassenger () {
      return this.$store.getters['pendingPassenger']
    },
    passengers () {
      return this.$store.getters['passengers']
    }
  },
  created () {
    setTimeout(() => {
      this.isPassangerNotificationVisible = true
    }, 500)
  },
  methods: {
    approvePassenger () {
      this.$store.commit('APPROVE_PASSENGER', this.pendingPassenger)
      this.isPassangerNotificationVisible = false
    },
    rejectPassanger () {
      this.$store.commit('REJECT_PASSENGER')
      this.isPassangerNotificationVisible = false
    }
  }
}
</script>

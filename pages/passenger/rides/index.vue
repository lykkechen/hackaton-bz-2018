templ

<template>
  <section class="section">
    <div class="container">
      <div
        v-if="hasRides"
        class="content">
        <h2>Passeggi</h2>
        <div
          v-for="ride in rides"
          :key="ride.name">
          <p>Nome: {{ ride.name }}</p>
          <p>Cognome: {{ ride.surname }}</p>
        </div>
      </div>
      <div>
        <base-button
          action="Partenza"
          @click="$router.push('/driver/travelling')"/>
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

    }
  },
  computed: {
    rides () {
      return this.$store.getters['rides']
    },
    hasRides () {
      return this.rides > 0
    }
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

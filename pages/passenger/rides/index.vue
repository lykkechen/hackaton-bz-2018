<template>
  <section class="section">
    <div class="container">
      <div
        v-if="hasRides"
        class="content">
        <h2>Rides</h2>
        <div
          v-for="ride in rides"
          :key="ride.name">
          <p>Nome: {{ ride.name }}</p>
          <p>Cognome: {{ ride.surname }}</p>
          <base-button
            action="Scegli"
            @click="chooseDriver(ride)"/>
        </div>
      </div>
      <div/>
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
      return this.rides !== 0
    }
  },
  methods: {
    chooseDriver (ride) {
      this.$router.push('/passenger/travelling')
      this.$store.commit('APPROVE_DRIVER', ride)
    },
    rejectPassanger () {

      this.isPassangerNotificationVisible = false
    }
  }
}
</script>

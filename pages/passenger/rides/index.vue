<template>
  <section class="section">
    <div class="container">
      <div
        v-if="hasRides"
        class="content">
        <h1>Rides</h1>
        <div
          v-for="ride in rides"
          :key="ride.name">
          <base-card>
            <h3>Driver</h3>
            <p>{{ ride.name }}</p>
            <p>{{ ride.surname }}</p>
            <base-button
              action="Scegli"
              @click="chooseDriver(ride)"/>
          </base-card>
          <br>
        </div>
      </div>
      <div/>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'

export default {
  components: {
    BaseButton,
    BaseCard
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

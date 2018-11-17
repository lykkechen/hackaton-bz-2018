<template>
  <section class="section">
    <div class="container">
      <div
        class="content">
        <h2>Driver</h2>

        <p>Nome: {{ driver.name }}</p>
        <p>Cognome: {{ driver.surname }}</p>
        <h2>Ride</h2>

        <p>From {{ passenger.from }}</p>
        <p>To: {{ passenger.to }}</p>
        <p>Time: {{ passenger.time }}</p>

        <h2>Other passengers</h2>
        <profile-icon
          image="/images/random-guy-2.jpeg"/>
        <base-button
          action="Add me"
          @click="checkout()"/>
      </div>
      <div/>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import ProfileIcon from '@/components/ProfileIcon'
export default {
  components: {
    BaseButton,
    ProfileIcon
  },
  computed: {
    driver () {
      return this.$store.getters['driver']
    },
    passenger () {
      return this.$store.getters['passenger']
    },
    passengers () {
      return this.$store.getters['passengers']
    }
  },
  created () {
    this.$store.commit('UPDATE_PASSENGERS')
  },
  methods: {
    chooseDriver (ride) {
      this.$router.push('/passenger/travelling')
      this.$store.commit('APPROVE_DRIVER', ride)
    },
    checkout () {
      this.$router.push('/passenger/booked')
    }
  }
}
</script>

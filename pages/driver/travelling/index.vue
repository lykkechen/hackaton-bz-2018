<template>
  <div>
    <div
      v-for="passenger in passengers"
      :key="passenger.name">
      Passenger: {{ passenger.name }} {{ passenger.surname }}
      <base-button
        action="È arrivato"
        @click="checkoutPassenger(passenger)"/>
    </div>
  </div>
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
    }, 2000)
  },
  methods: {
    approvePassenger () {
      this.$store.commit('APPROVE_PASSENGER', this.pendingPassenger)
      this.isPassangerNotificationVisible = false
    },
    rejectPassanger () {
      this.$store.commit('REJECT_PASSENGER')
      this.isPassangerNotificationVisible = false
    },
    checkoutPassenger (passenger) {
      this.$router.push('/driver/impact')
      this.$store.commit('CHECKOUT_PASSENGER', passenger)
    }
  }
}
</script>

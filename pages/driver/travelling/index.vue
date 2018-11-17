<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-10">
          <base-card>
            <div
              v-for="passenger in passengers"
              :key="passenger.name">
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <div class="content">
                      <h4>Passenger: {{ passenger.name }} {{ passenger.surname }}</h4>
                    </div>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <base-button
                      action="Has arrived!"
                      @click="checkoutPassenger(passenger)"/>
                  </div>
                </div>
              </div>
            </div>
          </base-card>
          <br>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import BaseButton from '@/components/BaseButton'
import BaseCard from '@/components/BaseCard'
export default {
  components: {
    BaseButton,
    BaseCard
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

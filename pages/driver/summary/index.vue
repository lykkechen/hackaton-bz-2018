<template>
  <section class="section">
    <div class="container">
      <div>
        <div>
          <div class="content is-medium">
            <h1>The summary of your trip</h1>
            <p>You will leave from {{ driver.from }} at {{ driver.time }}, arrive to {{ driver.to }} and your car has {{ driver.places }} seats</p>
          </div>
          <div
            v-if="passengers.length > 0"
            class="content">
            <h2>These fine people will be on your ride</h2>
            <div
              v-for="passenger in passengers"
              :key="passenger.name">
              <base-card>
                <p>Nome: {{ passenger.name }}</p>
                <p>Cognome: {{ passenger.surname }}</p>
              </base-card>
              <br>
            </div>
          </div>
          <div
            v-if="isPassangerNotificationVisible"
            class="columns">
            <div class="column is-6">
              <base-card>
                <div
                  class="content">
                  <h2>This person requested to join your ride</h2>
                  <hr>
                  <div class="columns">
                    <div class="column">
                      <h2>Name</h2>
                      <p> {{ pendingPassenger.name }} </p>
                    </div>
                    <div class="column">
                      <h2>Surname:</h2>
                      <p> {{ pendingPassenger.surname }}</p>
                    </div>
                  </div>
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <driver-button
                          action="Jump in!"
                          @click="approvePassenger"/>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <base-button
                          action="Nope"
                          @click="rejectPassenger"/>
                      </div>
                    </div>
                  </div>
                </div>
              </base-card>
            </div>
          </div>
          <br>
          <div>
            <base-button
              action="Let's go!"
              @click="$router.push('/driver/travelling')"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import DriverButton from '@/components/DriverButton.vue'
import BaseCard from '@/components/BaseCard'

export default {
  components: {
    BaseButton,
    BaseCard,
    DriverButton
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
    rejectPassenger () {
      this.$store.commit('REJECT_PASSENGER')
      this.isPassangerNotificationVisible = false
    }
  }
}
</script>

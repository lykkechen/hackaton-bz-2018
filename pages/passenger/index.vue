<template>
  <section class="section">
    <div class="container">
      <base-input
        v-model="from"
        label="Leaving from"
        type="text"/>
      <base-input
        v-model="to"
        label="Arriving in"
        type="text"/>
      <base-input
        v-model="time"
        label="Leaving time"
        type="text"/>
      <br>
      <nuxt-link
        to="/passenger/rides">
        <base-button
          action="Let's go"
          @click="createPassengerItinerary"/>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseInput,
    BaseButton
  },
  data () {
    return {
      from: "",
      to: "",
      time: ""
    }
  },
  methods: {
    createPassengerItinerary () {
      let itinerary = {}
      if (!this.from) {
        itinerary =  {
          from: 'Schlanders',
          to: 'Bozen',
          name: "Alex",
          time: '15'
        }
      } else {
        itinerary =  {
          name: "Alex",
          from: this.from,
          to: this.to,
          time: this.time
        }
      }
      this.$store.commit('CREATE_PASSENGER_ITINERARY', itinerary)
    }
  }
}
</script>

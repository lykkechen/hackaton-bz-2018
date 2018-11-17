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
      places: "",
      from: "",
      to: "",
      time: ""
    }
  },
  methods: {
    createPassengerItinerary () {
      this.$store.commit('CREATE_PASSENGER_ITINERARY', {
        from: this.from,
        to: this.to,
        time: this.time,
        name: "Alex"
      })
    }
  }
}
</script>

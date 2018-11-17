<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <figure
            class="image"
            style="margin-bottom: 20px;">
            <img
              src="/images/car.svg"
              alt="image"
              style="width: 150px;">
          </figure>
        </div>
      </div>
      <base-input
        v-model="places"
        label="How many seats do you have?"
        type="text"/>
      <base-input
        v-model="from"
        label="Leaving from"
        type="text"/>
      <base-input
        v-model="to"
        label="Arriving to"
        type="text"/>
      <base-input
        v-model="time"
        label="Leaving at"
        type="text"/>
      <br>
      <nuxt-link
        to="/driver/summary">
        <base-button
          action="Let's go"
          @click="createDriverItinerary"/>
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
    createDriverItinerary () {
      this.$store.commit('CREATE_DRIVER_ITINERARY', {
        places: this.places,
        from: this.from,
        to: this.to,
        time: this.time
      })
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-content">
      <base-input
        v-model="places"
        label="Numero di posti"
        type="text"/>
      <base-input
        v-model="from"
        label="Partenza da"
        type="text"/>
      <base-input
        v-model="to"
        label="Arrivo a"
        type="text"/>
      <base-input
        v-model="time"
        label="Partenza alle ore"
        type="text"/>
      <nuxt-link
        to="/driver/summary">
        <base-button
          action="Let's go"
          @click="createDriverItinerary"/>
      </nuxt-link>
    </div>
  </div>
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

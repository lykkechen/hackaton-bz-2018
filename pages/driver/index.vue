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
      <nuxt-link
        to="driver/result">
        <base-button
          :action="buttonLabel"
          to="driver/result"
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
      toLabel: "Arrivo",
      buttonLabel: "Let's go"
    }
  },
  methods: {
    createDriverItinerary () {
      debugger
      this.$store.commit('CREATE_DRIVER_ITINERARY', {
        place: this.places,
        from: this.from,
        to: this.to
      })
    }
  }
}
</script>

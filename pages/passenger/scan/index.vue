<template>
  <section class="section">
    <div class="container">
      <div class="content">
        Hey Alex! Sei pronto per scendere?
      </div>
      <nuxt-link to="/">
        <base-button
          action="Scan to QR code"
          @click="addDiscountCode"/>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
export default {
  components: {
    BaseButton
  },
  methods: {
    addDiscountCode () {
      this.$store.commit('ADD_DISCOUNT_CODE', {
        number: '757843265876239',
      })
      this.deletePassengerItinerary()
    },
    deletePassengerItinerary () {
      this.$store.commit('DELETE_PASSENGER_ITINERARY', {})
    }
  }
}
</script>

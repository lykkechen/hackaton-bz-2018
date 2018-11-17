<template>
  <section class="section">
    <div class="container">
      <base-card>
        <div class="content">
          Hey Alex! Have you arrived? Scan the QR Code and log your travel to add a new code to your log 🎟
        </div>
        <nuxt-link to="/impact">
          <base-button
            action="Scan QR code"
            @click="addDiscountCode"/>
        </nuxt-link>
      </base-card>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'

export default {
  components: {
    BaseButton,
    BaseCard
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

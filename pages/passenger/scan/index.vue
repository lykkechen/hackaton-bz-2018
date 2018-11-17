<template>
  <section class="section">
    <div class="container">
      <div class="content">
        Hey Alex! Sei pronto per scendere?
      </div>
      <nuxt-link to="/">
        <base-button
          action="Scan to QR code"
          @click="addCoupon"/>
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
    addCoupon () {
      this.$store.commit('ADD_COUPON', {
        number: '757843265876239',
      })
    }
  }
}
</script>

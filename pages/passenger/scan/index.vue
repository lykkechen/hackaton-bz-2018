<template>
  <section class="section">
    <div class="container">
      <div class="content">
        Hey Alex! Sei pronto per scendere?
      </div>
      <nuxt-link to="/">
        <base-button
          action="Scan to QR code"/>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
export default {
  components: {
    BaseButton
  }
}
</script>

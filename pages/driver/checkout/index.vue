<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="content">
            <h1>Show this QR Code to your passenger</h1>
          </div>
          <figure class="image is-square">
            <img src="/images/qr-code-2.jpg">
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    passengers () {
      return this.$store.getters['passengers']
    }
  },
  created () {
    setTimeout(() => {
      if (this.passengers.length > 0) {
        this.$router.push('/driver/travelling')
      } else {
        this.$router.push('/')
        this.$store.commit('OBTAIN_COUPON')
      }
      this.isPassangerNotificationVisible = true
    }, 2000)
  }
}
</script>

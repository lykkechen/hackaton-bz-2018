<template>
  <section class="section">
    <div class="container">
      <base-card>
        <div class="content has-text-centered">
          <h1>You've successfully booked your ride!</h1>
        </div>
        <div class="content has-text-centered">
          <nuxt-link to="/">
            <base-button
              action="Go back to home"/>
          </nuxt-link>
        </div>
      </base-card>
    </div>
  </section>
</template>

<script>
import BaseCard from '@/components/BaseCard'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components : {
    BaseCard,
    BaseButton
  }
}
</script>


<template>
  <section class="section">
    <div class="container">
      <div class="content is-medium">
        <h1>Travel log</h1>
        <p>Here you can find the codes that are connected to OpenData Hub Sudtirol Carpooling</p>
      </div>
      <div class="columns is-multiline">
        <div
          v-for="code in codes"
          :key="code.number"
          class="column is-half">
          <base-card>
            <div class="content is-medium">
              <h3>Travel</h3>
              <p>{{ code.number }}</p>
            </div>
          </base-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCard from '@/components/BaseCard'
import BaseButton from '@/components/BaseButton'
export default {
  components: {
    BaseButton,
    BaseCard
  },
  computed: {
    codes () {
      return this.$store.getters['codes']
    }
  },
  methods: {
    reedemCode () {
      this.$store.commit('REDEEM_CODE')
    }
  }
}
</script>


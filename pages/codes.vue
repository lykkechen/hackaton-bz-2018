<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1>Your codes</h1>
      </div>
      <div class="columns is-multiline">
        <div
          v-for="code in codes"
          :key="code.number"
          class="column is-half">
          <base-card>
            <div class="content">
              <h1>Code: #{{ code.number }}</h1>
              <base-button
                action="Use it"
                @click="reedemCode"/>
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


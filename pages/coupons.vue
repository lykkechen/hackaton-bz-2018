<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1>Your codes</h1>
      </div>
      <div class="columns is-multiline">
        <div
          v-for="code in codes"
          :key="code"
          class="column is-half">
          <base-card>
            <div class="content">
              <h1>Code: #{{ code }}</h1>
              <base-button
                action="Use it"/>
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
    BaseCard,
    BaseButton
  },
  data() {
    return {
      codes: [
        '124545454',
        '432432432',
        "143243243"
      ]
    }
  }
}
</script>


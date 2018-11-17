<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full">
          <base-card>
            {{ coupon.number }}
          </base-card>
        </div>
        <div class="column is-full">
          <base-card>
            
          </base-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCard from '@/components/BaseCard'
export default {
  components: {
    BaseCard
  },
  props: {
    coupon: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>


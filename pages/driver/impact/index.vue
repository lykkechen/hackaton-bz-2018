<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <base-card>
            <div class="content">
              <h3>People met</h3>
              <p>20</p>
              <br>
              <h3>Traffic reduced</h3>
              <p>10%</p>
              <br>
              <h3>CO2 reduced</h3>
              <p>10%</p>
            </div>
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
  }
}
</script>

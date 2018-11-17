<template>
  <section class="section">
    <div class="container">
      <div class="columns has-text-centered">
        <div class="column">
          <base-card>
            <div class="content has-text-centered">
              <h3>This is the code of your carpool travel </h3>
              <p>This code represent just this unique travel and its data saved in the OpenData Hub Sudtirol</p>
              <h1 style="color: #20af48; margin-top: 0;">1110202</h1>
              <hr>
              <div
                class="card is-shadowless"
                style="background-color: #f5f5f5;">
                <div class="card-content">
                  <div class="columns">
                    <div class="column">
                      <p>People met</p>
                      <h2>20</h2>
                    </div>
                    <div class="column">
                      <p>Traffic reduced</p>
                      <h1>10%</h1>
                    </div>
                    <div class="column">
                      <p>CO2 reduced</p>
                      <h1>10%</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </base-card>
          <br>
          <nuxt-link to="/">
            <base-button
              action="Go to home"/>
          </nuxt-link>
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
  }
}
</script>

<style lang="scss" scoped>
 hr {
    width: 100px;
    border: 2px solid black;
    margin-left: auto;
    margin-right: auto;
  }
</style>


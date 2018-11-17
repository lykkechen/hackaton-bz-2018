<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="box">
              <div class="content">
                <div class="level is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <div class="circle">{{ numberCoupon }}</div>
                    </div>
                    <div class="level-item">
                      Coupons
                    </div>
                  </div>
                  <div
                    class="level-item"
                    style="font-size: 1rem;">
                    &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-full">
            <nuxt-link
              to="/driver">
              <base-button
                action="Driver"/>
            </nuxt-link>
          </div>
          <div class="column is-full">
            <nuxt-link
              to="/passenger">
              <base-button
                action="Passenger"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
  components: {
    BaseButton
  },
  data() {
    return {
      numberCoupon: 1
    }
  },
}
</script>



<style lang="scss" scoped>
  .circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: #fff;
    line-height: 2rem;
    text-align: center;
    background: #000
  }
</style>


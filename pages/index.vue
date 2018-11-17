<template>
  <div>
    <section
      class="section"
      style="padding-top: 0;">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <coupon-badge/>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <div class="content">
              <h3>Hey there, welcome! Are you ready for a new ride?</h3>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <hr>
          </div>
        </div>
        <div class="columns is-multiline is-centered">
          <div class="column is-half has-text-right-desktop has-text-centered-mobile">
            <nuxt-link
              to="/driver">
              <driver-button
                action="I offer a ride"/>
            </nuxt-link>
          </div>
          <div class="column is-half has-text-left-desktop has-text-centered-mobile">
            <nuxt-link
              to="/passenger">
              <passenger-button
                action="I am looking for one"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DriverButton from '@/components/DriverButton'
import PassengerButton from '@/components/PassengerButton'
import CouponBadge from '@/components/CouponBadge'


export default {
  components: {
    DriverButton,
    PassengerButton,
    CouponBadge
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

  .has-background-image {
    background-image: url("/images/index-bg.svg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  hr {
    width: 50px;
    border: 2px solid black;
    margin-left: auto;
    margin-right: auto;
  }
</style>


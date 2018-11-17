<template>
  <div>
    <section
      class="section"
      style="padding-top: 0;">
      <div class="container">
        <div
          v-if="hasCodes"
          class="columns is-centered">
          <div
            class="column is-one-third">
            <coupon-badge :codes="codes"/>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <div class="content is-medium">
              <h3>Hey there, welcome! <br> This is PoolMe, the travel log for carpooling travels. Are you ready to log a new ride?</h3>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <hr>
          </div>
        </div>
        <div
          v-if="isThereAPassenger"
          class="columns is-centered has-text-centered">
          <div class="column is-half">
            <base-card>
              <div class="content is-medium">
                You are travelling from {{ passenger.from }} to {{ passenger.to }} now 🚗
              </div>
              <nuxt-link to="/passenger/scan">
                <base-button
                  action="I'm arrived 🎉"/>
              </nuxt-link>
            </base-card>
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
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'


export default {
  components: {
    DriverButton,
    PassengerButton,
    CouponBadge,
    BaseButton,
    BaseCard
  },
  computed: {
    passenger () {
      return this.$store.getters['passenger']
    },
    codes () {
      return this.$store.getters['codes']
    },
    hasCodes () {
      return this.codes.length !== 0
    },
    isThereAPassenger () {
      if (this.passenger && this.passenger.from) {
        return true
      }
      else return false
    }
  }
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


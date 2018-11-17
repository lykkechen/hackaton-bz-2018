<template>
  <section class="section">
    <div class="container">
      <base-card>
        <div
          class="content">
          <h2>Your driver will be {{ driver.name }} {{ driver.surname }}</h2>
          <h2>Ride</h2>
          <div class="columns">
            <div class="column is-one-third">
              <h3>From:</h3>
              <p>{{ passenger.from }}</p>
            </div>
            <div class="column is-one-third">
              <h3>To:</h3>
              <p>{{ passenger.to }}</p>
            </div>
            <div class="column is-one-third">
              <h3>Time:</h3>
              <p>{{ passenger.time }}</p>
            </div>
          </div>
          <hr>
          <h2>You'll be in the car with these fine people</h2>
          <div class="columns is-centered">
            <div class="column">
              <profile-icon
                image="https://cdn.dribbble.com/users/1079878/avatars/normal/fdced349f4efa5f0226dcfab71243d6b.png?1520775907"/>
            </div>
            <div class="column">
              <profile-icon
                image="https://avatars2.githubusercontent.com/u/26112919"/>
            </div>
            <div class="column">
              <profile-icon
                image="https://avatars3.githubusercontent.com/u/29076107"/>
            </div>
          </div>
          <base-button
            action="Add me"
            @click="checkout()"/>
        </div>
      </base-card>
      <div/>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import ProfileIcon from '@/components/ProfileIcon'
import BaseCard from '@/components/BaseCard'

export default {
  components: {
    BaseButton,
    ProfileIcon,
    BaseCard
  },
  computed: {
    driver () {
      return this.$store.getters['driver']
    },
    passenger () {
      return this.$store.getters['passenger']
    },
    passengers () {
      return this.$store.getters['passengers']
    }
  },
  methods: {
    checkout () {
      this.$router.push('/passenger/booked')
    }
  }
}
</script>

<style lang="scss">
hr {
    width: 50px;
    border: 2px solid black;
  }
</style>


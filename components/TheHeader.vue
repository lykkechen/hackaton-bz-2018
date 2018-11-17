<template>
  <nav class="navbar is-transparent">
    <div
      class="navbar-brand"
      style="padding: 1rem;">
      <div class="navbar-item">
        <div
          class="content"
          style="margin: 1rem;">
          <img src="/images/PollMe-Logo.png">
        </div>
      </div>
      <nuxt-link
        to="/">
        <profile-icon
          image="/images/random-guy.jpeg"/>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import ProfileIcon from '@/components/ProfileIcon'
export default {
  components: {
    ProfileIcon
  }
}
</script>


<template>
  <nav class="navbar is-transparent">
    <div
      class="navbar-brand"
      style="padding: 1rem;">
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


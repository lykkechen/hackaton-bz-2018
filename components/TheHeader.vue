<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
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


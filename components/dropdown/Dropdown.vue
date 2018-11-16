<template>
  <div
    :class="{'is-active': isOpen}"
    class="dropdown">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu">
        <span>Arrivo</span>
        <span class="icon is-small">
          <i
            class="fas fa-angle-down"
            aria-hidden="true"/>
        </span>
      </button>
    </div>
    <div
      id="dropdown-menu"
      class="dropdown-menu"
      role="menu">
      <div class="dropdown-content">
        <a
          :class="{'is-active': isItemSelected}"
          class="dropdown-item">
          Bolzano
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true
    },
    isItemSelected: {
      type: Boolean,
      default: true
    }
  }
}
</script>

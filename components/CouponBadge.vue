<template>
  <div class="box is-shadowless">
    <div class="content">
      <figure
        class="image"
        style="margin-bottom: 0;">
        <img
          src="/images/TICKET.svg"
          alt="image"
          style="width: 100px;">
      </figure>
      <div class="level is-mobile ">
        <div class="level-left">
          <div class="level-item">
            <div class="circle">{{ numberCoupon }}</div>
          </div>
          <div class="level-item">
            Your codes
          </div>
        </div>
        <div
          class="level-item"
          style="font-size: 1rem;">
          <nuxt-link to="coupons">
            <div class="button is-secondary">
              show me
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberCoupon: 1
    }
  }
}
</script>

<style lang="scss" scoped>

  .box {
    background-color: #f5f5f5;
  }
  .circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: #fff;
    line-height: 2rem;
    text-align: center;
    background: #000
  }

  .is-secondary {
    background-color: #f5f5f5;
    border: 0;
    border-radius: 0;
    font-weight: 700;
    &:hover {
      background-color: white;
    }
  }
</style>


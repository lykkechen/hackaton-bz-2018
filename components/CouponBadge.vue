<template>
  <div class="box is-shadowless">
    <div class="content">
      <div class="level is-mobile ">
        <div class="level-left">
          <div class="level-item">
            <div class="circle">{{ numberCoupon }}</div>
          </div>
          <div class="level-item">
            Free mobility ticket
          </div>
        </div>
        <div
          class="level-item"
          style="font-size: 1rem;">
          <div class="button is-secondary">
            show
          </div>
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


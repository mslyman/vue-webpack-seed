<template>
  <div>
    <div
      class="full-width center-content">
      <hello-component name="World" />
    </div>
    <div class="full-width center-content">
      <h2>Vue!</h2>
    </div>
  </div>
</template>

<script>
// https://itnext.io/vue-js-and-webpack-4-from-scratch-part-3-3f68d2a3c127
import HelloComponent from '../components/hello-component.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/colors.scss";
$clr: green;
h2{
    color: $clr;
}
</style>

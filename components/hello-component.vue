<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <div><img class="wp-icon1"></div>
    <div class="wp-icon2"/>
    <div><img
      :src="imgSrc"
      class="wp-icon3"></div>
    <div><img
      src="./../src/images/webpack.png"
      class="wp-icon4"></div>
  </div>
</template>

<script>
import wpIcon1 from './../src/images/webpack.png'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      imgSrc: wpIcon1
    }
  },
  mounted () {
    let img = document.getElementsByClassName('wp-icon1')[0]
    if (img) {
      img.src = wpIcon1
    }
  }
}
</script>

<style lang="scss" module>
h1 {
  color: blue;
}
img {
  background-color:gray;
}
img.wp-icon1,div.wp-icon2,img.wp-icon3,img.wp-icon4{
  width:250px;
  height:107px;
}
div.wp-icon2 {
  background: url('./../src/images/webpack.png') no-repeat;
  background-size: contain;
}
</style>

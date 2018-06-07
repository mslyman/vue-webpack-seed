import Vue from 'vue'
import App from './App.vue'
import '../assets/app.scss'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

var x = (a) => {
  console.log(a)
}

x(123)
x(456)

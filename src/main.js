import Vue from 'vue'
import App from './App.vue'

Vue.filter('textFilter', function(value) {
  var arr = value.split(" ");
      if(arr.length > 3) {
        return `${arr[0]} ${arr[1]}\n${arr.slice(2).join(' ')}`;
      }
      else {
        return value;
      }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

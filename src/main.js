import Vue from "vue";
import App from "./App.vue";
import "@/plugins/bootstrap.js";
import "@/assets/App.scss";

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");

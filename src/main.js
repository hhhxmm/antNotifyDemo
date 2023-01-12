import Vue from "vue";
import App from "./App";
import "ant-design-vue/dist/antd.css";
import "./ant-design-vue";
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});

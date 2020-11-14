import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import slider from './components/Slider';
import coksatanlar from './components/coksatanlar'
import ozelindirim from './components/ozelindirim'
import girisyap from './components/girisyap'
import ortamenu from './components/ortamenu'
import uyepanel from './components/uyepanel'
import urunsayfa from './components/urunsayfa'
import header from './components/header'
import indirimler from './components/indirimler'

Vue.config.productionTip = false;
Vue.component('app-slider', slider)
Vue.component('app-coksatanlar',coksatanlar)
Vue.component('app-ozelindirim',ozelindirim)
Vue.component('app-girisyap',girisyap)
Vue.component('app-ortamenu',ortamenu)
Vue.component('app-uyepanel',uyepanel)
Vue.component('app-urunsayfa',urunsayfa)
Vue.component('app-header',header)
Vue.component('app-indirimler',indirimler)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

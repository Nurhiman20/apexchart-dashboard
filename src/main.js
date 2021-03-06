import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');
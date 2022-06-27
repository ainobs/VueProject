import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios'
import AllJobs from './views/AllJobs.vue';
import JobOverview from './views/JobOverview.vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.use(axios)


const routes = [
  {
      path: '/', 
      name: 'Home',
      component: AllJobs
  },
  {
      path: '/job/:id', 
      name: 'Job',
      component: JobOverview,
      props: true
  },
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

library.add(fas);

import * as mdbvue from "mdbvue";
import {
  BTable,
  BCol,
  BFormGroup,
  BInputGroup,
  BButton,
  BInputGroupAppend,
  BFormInput,
  VBToggle,
  BRow,
  BootstrapVue,
} from "bootstrap-vue";

import "mdbvue/lib/mdbvue.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../src/common/styles.css";

Vue.use(BootstrapVue);


for (const component in mdbvue) {
  Vue.component(component, mdbvue[component]);
}

Vue.component("b-table", BTable);
Vue.component("b-button", BButton);
Vue.component("b-col", BCol);
Vue.component("b-row", BRow);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-input", BFormInput);
Vue.component("b-input-group", BInputGroup);
Vue.component("b-button", BButton);
Vue.component("b-input-group-append", BInputGroupAppend);
Vue.component("b-toggle", VBToggle);
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.devtools = true;

new Vue({
  store,
 router,
  render: (h) => h(App),
}).$mount("#app");


//createApp(App).use(router).mount('#app');

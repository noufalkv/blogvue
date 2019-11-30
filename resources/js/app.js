 
require('./bootstrap');
window.Vue = require('vue');

// Support vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)
  
// vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// editor support
import 'v-markdown-editor/dist/index.css';
import Editor from 'v-markdown-editor'
Vue.use(Editor);

import {filter} from './filter'

import {routes} from './routes.js';
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('home-main', require('./components/public/PublicMaster.vue').default);12

 

 // V-form
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;


 
// Sweet alert 2
 import swal from 'sweetalert';

 window.swal = swal;
 
//window.toast = toast;


const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:'history',

})



const app = new Vue({
    el: '#app',
    router,
    store
   

});


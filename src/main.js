
import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {store} from './store/store.js'
import router from './router'
import * as firebase from "firebase";
import VueSimpleAlert from "vue-simple-alert";


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyCK92vsedUZs2BcHt-6Q_-BaVCPuboDpXI",
    authDomain: "babyproject-fbee0.firebaseapp.com",
    databaseURL: "https://babyproject-fbee0.firebaseio.com",
    projectId: "babyproject-fbee0",
    storageBucket: "babyproject-fbee0.appspot.com",
    messagingSenderId: "34654236947",
    appId: "1:34654236947:web:5647ff3a7d88c88d6c6ae6",
    measurementId: "G-SS2PPN2S7S"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

new Vue({
  store:store,
    router,
  render: h => h(App),
}).$mount('#app')

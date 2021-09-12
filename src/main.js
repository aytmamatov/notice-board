import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: (h) => h(App),
  created() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_CONFIG_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
      projectId: process.env.VUE_APP_FIREBASE_CONFIG_PROJECT_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_CONFIG_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
  },
}).$mount("#app");

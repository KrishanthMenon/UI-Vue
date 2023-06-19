var config = require("dotenv");
config.config();

import Vue from "vue";
import VueTour from 'vue-tour' //vue-tour library 
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@/mixins/generalMixin";
import i18n from "./plugins/i18n";
import firebase from "./plugins/firebase.js"
const { messaging } = firebase;
import VueGtag from "vue-gtag";

// import firebase from 'firebase/app';
// import 'firebase/messaging';

require('vue-tour/dist/vue-tour.css') //require vue tour css
Vue.use(VueTour)

Vue.use(VueGtag, {
  config: {
      id: process.env.VUE_APP_GTAGID,
      send_page_view: false,
      link_attribution: true,
      pageTrackerScreenviewEnabled: true,
      cookieDomain: 'none',
      pageTrackerTemplate(to, from) {
          return {
              page_title: to.title,
              page_path: to.path,
              fromPage_title: from.title,
              fromPage_path: from.path
          }
      }
  }
}, router);

window.selectedVoice = 0;
window.synth = window.speechSynthesis;
window.voiceList = [];
window.greetingSpeech = window.synth
  ? new window.SpeechSynthesisUtterance()
  : null;

Vue.config.productionTip = false;

const waitForStorageToBeReady = async (to, from, next) => {
  await store.restored;
  next();
};
router.beforeEach(waitForStorageToBeReady);

if (messaging) {

  /** Firebase onscreen message received here*/
  messaging.onMessage((payload) => {
    console.log('firebase main message received. ', payload);
    let object = payload.data;

    const notificationTitle = object.title;
    const notificationOptions = {
      body: object.body,
      icon: object.icon ?? "",
      badge: object.badge ?? "",
      image: object.image ?? "",
      requireInteraction: true,
      tag: "FrendyApp",
    };
    // comma seperated value
    if (object.vibrate) {
      notificationOptions['vibrate'] = object.vibrate.split(",");
    }

    // if (payload.data && payload.data['gcm.notification.actions']) {
    if (payload.data && payload.data.actions) {
      // console.log("notification actions", JSON.parse(payload.data.actions));
      notificationOptions['actions'] = JSON.parse(payload.data.actions);
    }

    // here we are getting list of service worker and showNotification() is the method of active serviceWorker
    navigator.serviceWorker.getRegistrations().then(function (reg) {
      // console.log("registration of service worker", reg);
      // console.log("registration of service worker push options", notificationOptions);
      reg[0].showNotification(notificationTitle, notificationOptions).catch(function (err) {
        console.error('Unable to retrieve notification data', err);
      });
    });
  });
  /***Firebase */

}

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex'
import Vuetify from "vuetify";
import "./assets/style/index.scss";

import DefaultLayout from '~/layouts/default.vue'

import store from './store'

export default function (Vue, { appOptions, router, head, isClient }) {
  Vue.use(Vuex)
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  });

  const opts = {
    icons: {
      iconfont: "mdi",
    },
  }; // opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);
  appOptions.store = new Vuex.Store(store)
  Vue.component('Layout', DefaultLayout)
}
<template>
  <v-app class="grey lighten-5">
    <v-app-bar app color="primary" dark>
      <router-link class="d-flex align-center logo" to="/">
        <img
          :src="require('../assets/logo.svg')"
          alt="Project Logo"
          class="shrink mr-2 pa-3"
          style="filter: invert(1);"
          width="56"
        />
        <v-toolbar-title>Project-name</v-toolbar-title>
      </router-link>

      <v-toolbar-items class="ml-6">
        <v-btn to="/" exact text>
          <v-icon class="mr-2">
            mdi-home
          </v-icon>
          Home
        </v-btn>
        <v-btn to="/services" text>
          <v-icon class="mr-2">
            mdi-beehive-outline
          </v-icon>
          Services
        </v-btn>
        <v-btn to="/prices" text>
          <v-icon class="mr-2">
            mdi-currency-usd
          </v-icon>
          Prices
        </v-btn>
        <v-btn to="/contacts" text>
          <v-icon class="mr-2">
            mdi-map-marker
          </v-icon>
          Contacts
        </v-btn>
      </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="ml-4">
          <v-menu offset-y v-if="user">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text small slot="activator" v-on="on" v-bind="attrs">
                <span>
                  {{ user.name }}
                </span>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="logout">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <template v-else>
            <v-btn text to="/login">
              <span>
                Login
              </span>
            </v-btn>
          </template>
        </v-toolbar-items>
    </v-app-bar>

    <v-main>
     <v-fade-transition>
       <v-container>
        <slot />
       </v-container>
      </v-fade-transition>
    </v-main>
    <div class="loader" v-if="loading">
      <v-progress-circular indeterminate color="primary" :size="220" :width="16"></v-progress-circular>
    </div>

  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "DefaultLayout",
  mounted() {
    // rehydrate
    this.setUser((localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) || false)
    this.setAuth((localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth'))) || false)
  },
  computed: {
    ...mapGetters(["user", "loading"]),
  },
  methods: {
    ...mapMutations(["setUser", "setAuth"]),
    ...mapActions(["logout"]),
  },
};
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style scoped>
a.logo {
  color: #fff !important;
  text-decoration: none;
}
div.loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: wait;
}
</style>

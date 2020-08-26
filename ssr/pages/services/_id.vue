<template>
  <v-container v-if="service">
    <v-breadcrumbs
      class="ml-4"
      :items="[
        {
          text: 'All services',
          exact: true,
          to: '/services/'
        },
        {
          text: service.title,
          exact: true,
          to: '/services/' + service.id
        }
      ]"
    />
    <h1 class="display-2 mb-5 mt-3 text-capitalize">{{ service.title }}</h1>
    <v-row>
      <v-col cols="12">
        <v-img :src="service.image" :height="480" :width="640" />
      </v-col>
    </v-row>
    <p class="body-1 mb-4">
      {{ service.description }}
    </p>
    <v-btn color="primary" block large nuxt to="/prices">
      Subscribe now
    </v-btn>
  </v-container>
  <v-container v-else>
    <v-skeleton-loader
      class="mt-5"
      type="card-heading, image, paragraph, paragraph, paragraph"
    >
    </v-skeleton-loader>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Service",
  data() {
    return {
      service: null
    };
  },
  async fetch() {
    return this.fetchService(+this.$route.params.id).then(service => (this.service = service))
  },
  methods: {
    ...mapActions(['fetchService'])
  }
  /*
  asyncData({route}) {
    return new Promise(resolve => {
      setTimeout(() => {
        import("../../assets/services.json").then(module =>
          resolve({ service: module.default.find(
            e => e.id == route.params.id
          ) })
        );
      }, 500);
    });
  }
  */
};
</script>

<style></style>

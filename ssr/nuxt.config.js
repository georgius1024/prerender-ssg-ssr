module.exports = {
  generate: {
    routes: ['/', '/prices/', '/contacts/']
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "E-Commerce startup landing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { name: "linear", color: "#3B8070", background: "black" },
  buildModules: [
    [
      "@nuxtjs/vuetify",
      {
        /* module options */
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    loaders: {
      file: { esModule: false }
    }    
  }
};

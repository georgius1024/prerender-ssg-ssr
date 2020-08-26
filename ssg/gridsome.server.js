// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require("webpack-node-externals");
const services = require("./src/assets/services.json")

module.exports = function(api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.loadSource((store) => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  });
  
  api.createPages(({ createPage }) => {
    services.forEach((service) =>
      createPage({
        path: `/services/${service.id}`,
        component: "./src/templates/Service.vue",
        context: {
          id: service.id
        }
      })
    );
  });
};

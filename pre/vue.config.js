const services = require('./src/assets/services.json')
module.exports = {
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/contacts/', '/prices/', '/services/', ...services.map(e => `/services/${e.id}`)],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

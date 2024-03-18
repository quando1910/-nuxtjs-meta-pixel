export default defineNuxtConfig({
  dev: true,
  modules: ['../src/module'],
  facebook: {
    debug: false,
    pixelId: '123',
    pixels: [
      {
        pixelId: '321',
        routes: ['/about']
      }
    ]
  }
})

import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-meta-pixel',
    configKey: 'facebook'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    pixelId: null,
    track: 'PageView',
    autoPageView: false,
    version: '2.0',
    pixels: [],
    manualMode: false,
    disabled: false,
    debug: false,
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url);
    (nuxt.options.runtimeConfig.public as any).facebook = options;
    options.dev = nuxt.options.dev;

    // @TODO: enable when necessary
    // if (!options.pixelId) throw new Error('The default `pixelId` option is required.')

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})

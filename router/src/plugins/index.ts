import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'
import setupElementPlus from './elementui'
import setupPinia from './pinia'

export function setupPlugin(app: App) {
  autoRegisterComponent(app)
  setupElementPlus(app)
  setupTailwindcss()
  setupPinia(app)
}

function autoRegisterComponent(app: App) {
  const components: { [key: string]: any } = import.meta.glob('../components/form/*.vue', { eager: true })
  Object.keys(components).forEach(key => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(_.camelCase(name), components[key].default)
  })
}

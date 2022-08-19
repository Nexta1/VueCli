import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'
export function setupPlugin(app: App) {
  autoRegisterComponent(app)
  setupTailwindcss()
}

function autoRegisterComponent(app: App) {
  const components: { [key: string]: any } = import.meta.glob('../components/form/*.vue', { eager: true })
  Object.keys(components).forEach(key => {
    console.log(key)

    const name = key.split('/').pop()?.split('.').shift() as string

    app.component(_.camelCase(name), components[key].default)
  })
}

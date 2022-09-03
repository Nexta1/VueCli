import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'
import setupElementPlus from './elementui'
import setupElementIcon from './elementicon'
import setupPinia from './pinia'

export function setupPlugin(app: App) {
  // autoRegisterComponent(app)
  setupElementPlus(app)
  setupElementIcon(app)
  setupTailwindcss()
  setupPinia(app)
}
//自动注册全局组件
// function autoRegisterComponent(app: App) {
//   const components: { [key: string]: any } = import.meta.glob('../components/form/*.vue', { eager: true })
//   Object.keys(components).forEach(key => {
//     const name = key.split('/').pop()?.split('.').shift() as string
//     app.component(_.camelCase(name), components[key].default)
//   })
// }

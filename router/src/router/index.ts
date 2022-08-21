import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import  guard from './guard'
import layoutsRoutes from './autoload'
const router = createRouter({
  history: createWebHistory(),
  routes:[...routes,...layoutsRoutes]
})
export function setupRouter(app: App) {
  guard(router)
  app.use(router)
}
export default router

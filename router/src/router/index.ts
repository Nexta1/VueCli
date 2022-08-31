import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import guard from './guard'
import autoload from './autoload/'
import userStore from '@/store/userStore'
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
})
export async function setupRouter(app: App) {
  const user = userStore()
  await user.getUserInfo()
  autoload(router)
  guard(router)
  app.use(router)
}
export default router

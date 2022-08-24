import { RouteRecordRaw } from 'vue-router'
import { env } from '@/utils'
import getRoutes from './views'
import autoloadMoudle from './module'
let routes = [] as RouteRecordRaw[]
if (env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoloadMoudle()
}
export default routes

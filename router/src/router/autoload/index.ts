import userStore from '@/store/userStore'
import { Router, RouteRecordRaw } from 'vue-router'
import { env } from '@/utils'
import getRoutes from './views'
import autoloadMoudle from './module'
let routes = [] as RouteRecordRaw[]
env.VITE_ROUTER_AUTOLOAD ? (routes = getRoutes()) : (routes = autoloadMoudle())
function autoload(router: Router) {
  const user = userStore()
  routes = routes.map(route => {
    route.children = route.children?.filter(r => {
      const permission = r.meta?.permission
      return permission ? user.info?.permissions.includes(permission) : true
    })
    return route
  })
  routes.forEach(route => {
    router.addRoute(route)
  })
}
export default autoload

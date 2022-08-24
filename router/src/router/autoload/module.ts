import { RouteRecordRaw } from 'vue-router'
export default function autoloadMoudle() {
  const modules = import.meta.glob('../models/**/*.ts', { eager: true }) as { [key: string]: any }
  const routes = [] as RouteRecordRaw[]
  Object.keys(modules).forEach(key => {
    routes.push(modules[key].default)
  })
  return routes
}

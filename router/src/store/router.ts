
import { defineStore } from 'pinia'
import { RouteRecordNormalized, useRouter } from 'vue-router'
export const router = defineStore('router', {
  state: () => {
    return {
      routes: getRoutes(),
    }
  },
  getters: {},
})

function getRoutes() {
  const router = useRouter()
  const routes = router
    .getRoutes()
    .filter(r => r.children.length && r.meta.show)
    .map(r => { 
      return r.children.filter(r => r.meta?.show)
    })  
    return routes
}

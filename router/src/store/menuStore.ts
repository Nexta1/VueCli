import { IMenu } from '#/menu'
import { defineStore } from 'pinia'
import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import {store} from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'
export default defineStore('router', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
      isclose:true
    }
  },
  actions: {
    init() {
      this.getMenuByRoute()
      this.historyMenu = store.get(CacheEnum.HISTORY_MENU) ??[]
    },
    closeMenu(){
      this.isclose = !this.isclose
    },
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenu.indexOf(menu)
      this.historyMenu.splice(index, 1)
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return
      const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
      const isHas = this.historyMenu.some(menu => menu.route == route.name)
      if (!isHas) this.historyMenu.unshift(menu)
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop()
      }
      store.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    //路由获取菜单
    getMenuByRoute() {
      this.menus = router
        .getRoutes()
        .filter(r => r.children.length && r.meta.menu)
        .map(route => {
          console.log(route)

          let menu: IMenu = { ...route.meta?.menu }
          menu.children = route.children
            .filter(route => route.meta?.menu)
            .map(route => {
              return { ...route.meta?.menu, route: route.name }
            }) as IMenu[]
          return menu
        })
      return this.menus
    },
  },
})

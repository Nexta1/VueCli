import { IMenu } from '#/menu'
import { defineStore } from 'pinia'
import router from '@/router'
import { RouteLocationNormalized, RouteRecordName, RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import { store } from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'
export default defineStore('router', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
      isclose: true,
      bread: [] as RouteRecordNormalized[],
    }
  },
  actions: {
    init() {
      this.getMenuByRoute()
      this.getHistoryMenu()
      // console.log(this.historyMenu);
    },
    closeMenu() {
      this.isclose = !this.isclose
    }, 
    getHistoryMenu() {
      const routes = [ ] as RouteRecordRaw[]
      router.getRoutes().map(r=>routes.push(...r.children))
      console.log(routes);
      const history = store.get(CacheEnum.HISTORY_MENU) ?? []
      this.historyMenu = history.filter((m: { route: RouteRecordName | undefined })=>{
        return routes.some(r=>r.name==m.route)
      })
    },
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenu.indexOf(menu)
      this.historyMenu.splice(index, 1)
      store.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return
      //添加面包屑
      this.bread = route.matched
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
          let menu = { ...route.meta?.menu } as IMenu
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

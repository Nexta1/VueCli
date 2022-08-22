import { IData } from './../utils/store'
import store from '@/utils/store'
import { Router, RouteLocationNormalized } from 'vue-router'
class Guard {
  constructor(private router: Router) {}
  public run() {
    console.log(this.router)
    this.router.beforeEach((to, from) => {
      let token = store.get('token')
      if (this.isLogin(to, token) === false) return { name: 'login' }
      if (this.isGuest(to, token) === false) return from
    })
  }
  //游客拦截
  private isGuest(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.guest || (route.meta.guest && !token?.token))
  }
  //后台登录拦截
  private isLogin(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && token?.token))
  }
}
export default (router: Router) => {
  new Guard(router).run()
}

import { CacheEnum } from './../enum/cacheEnum';
import store from '@/utils/store'
import user from '@/store/userStore'
import { Router, RouteLocationNormalized } from 'vue-router'
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private token():any {
    return store.get(CacheEnum.TOKEN_NAME)
  }

private getUserInfo(){
  if(this.token()) user().getUserInfo()
}
  private beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (this.isLogin(to) === false) return { name: 'login' }
    if (this.isGuest(to) === false) return from
    this.getUserInfo()
  }

  //游客拦截
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.token()?.token))
  }
  //后台登录拦截y
  private isLogin(route: RouteLocationNormalized) {
    return Boolean(!route.meta.auth || (route.meta.auth && this.token()?.token))
  }
}
export default (router: Router) => {
  new Guard(router).run()
}

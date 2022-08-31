import { IMenu } from '#/menu'
import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    //路由是否显示
    menu?: IMenu
    permission: string
  }
}

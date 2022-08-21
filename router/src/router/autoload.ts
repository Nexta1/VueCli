import { RouteRecordRaw } from 'vue-router'
import util from '@/utils'
// viteAPI获取
const layouts = import.meta.glob('../layouts/*.vue', { eager: true })
const views = import.meta.glob('../views/**/*.vue', { eager: true }) /*递归 */
// console.log(layouts)

function getRoutes() {
  const layoutsRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module as { [key: string]: any })
    route.children = getChildRoutes(route)
    layoutsRoutes.push(route)
  })
  return layoutsRoutes
}
//布局路由
function getRouteByModule(file: string, module: { [key: string]: any }) {
  const isChild = file.split('/')
  const name =isChild.pop()?.split('.')[0]
  const path = isChild.length==2 ?`/${name}` : name
  const route = {
    name,
    path,
    component: module.default,
  } as RouteRecordRaw
  //自定义会接受
//   Object.assign(route,module.default.route)
  return route
}
//布局子路由
function getChildRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module as { [key: string]: any }) 
      routes.push(route)
    }
  })
  return routes
}

// console.log(util.env);


export default getRoutes()




//获取路由name
// console.log(file.match(/\.\.\/layouts\/(?<name>.+)\.vue/i)?.groups?.name)
// console.log(file.replace(/.+layouts\/\|\.vue/gi, ''))

//格式
// {
//     path:'/admin',
//     component:,
//     children:[]
// }

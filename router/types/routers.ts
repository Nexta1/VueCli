import 'vue-router'
declare module 'vue-router' {
    interface RouteMeta{
        auth?:boolean;
        guest?:boolean;
        //路由是否显示
        show?:boolean
        //菜单标题
        title?:string;
    }
}
import {http} from '@/plugins/axios'
interface User {
    name:string;
    age:number;
}
interface Login{
    token:string;
}
function info(){
    return http.request<User>({
        url:'info'
    })
}
function login(){
    return http.request<Login>({
        url:'login'
    })
}



export default {info,login}
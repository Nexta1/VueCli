import { http } from '@/plugins/axios'
export interface User {
  name: string
  age: number
  permissions:string[]
}
interface Login {
  token: string
}
function info() {
  return http.request<User>({
    url: 'info',
  })
}
function login(data: any) {
  return http.request<Login>({
    url: 'login',
    method: 'post',
    data,
  })
}

export default { info, login }

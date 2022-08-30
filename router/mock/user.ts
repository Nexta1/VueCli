import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: ({  }) => {
      return {
        code: 200,
        message: '请求成功',
        type:'success',
        result: {
          name: '我TM真帅',
          age:19,
          Permissions:['editor','error']
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        type:'success',
        result: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]
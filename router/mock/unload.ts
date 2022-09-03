import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
{
    url: '/api/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '上传成功',
        type:'success',
        result: {
          url:'../public/images/back.jpg'
        },
      }
    },
  }
] as MockMethod[]
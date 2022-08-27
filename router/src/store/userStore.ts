import { defineStore } from 'pinia'
import userApis, { User } from '@/apis/userApis'
export default defineStore('user', {
  state: () => {
    return {
      info: {} as null | User,
    }
  },
  actions: {
    async getUserInfo() {
      const res = await userApis.info()
      this.info = res.result
    },
  },
})

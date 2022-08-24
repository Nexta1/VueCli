import { defineStore } from 'pinia'
import { RouteRecordNormalized, useRouter} from 'vue-router'
export const router = defineStore('router', {
  state: () => {
    return {
      routes:[] as RouteRecordNormalized[]
    }
  },
  getters:{

  }
})



function getRoutes(){
    const router = useRouter()
}
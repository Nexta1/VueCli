import { createApp } from 'vue'
import App from './App.vue'
//在ts改paths
import router, { setupRouter } from '@/router'
import { setupPlugin } from './plugins'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupPlugin(app)
  //等待路由加载
  await router.isReady()
  app.mount('#app')
}
bootstrap()

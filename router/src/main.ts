import { createApp } from 'vue'
import App from './App.vue'
//在ts改paths
import router, { setupRouter } from '@/router'
import { setupPlugin } from '@/plugins'
import '@/style/gloable.scss'
async function bootstrap() {
  const app = createApp(App)
  setupPlugin(app)
  setupRouter(app)
  //等待路由加载
  await router.isReady()
  app.mount('#app')
}
bootstrap()

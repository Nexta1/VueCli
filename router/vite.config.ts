import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import proxy from './vite/plugins/server'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
import { visualizer } from 'rollup-plugin-visualizer'
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   },
// })

//开发模式
//运行
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  return {
    // plugins: [vue()],
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    resolve: {
      alias,
    },
    server: {
      proxy,
      post: 5173,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id :string) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
    },
    
  }
}

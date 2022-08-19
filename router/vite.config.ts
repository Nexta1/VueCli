import { defineConfig, ConfigEnv, loadEnv } from 'vite'

import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   },
// })

//开发模式
//运行
export default ({ command, mode }: ConfigEnv) => {
  console.log(command, mode)
  const isBuild = command == 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  return {
    // plugins: [vue()],
    plugins:setupPlugins(isBuild ,env),
    resolve: {
      alias,
    },
  }
}


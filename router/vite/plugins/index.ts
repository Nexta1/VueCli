
import vue from '@vitejs/plugin-vue'
import setupMockPlugin from './mock';
import autoimport from './autoimport'
export default function setupPlugin(isBuild :boolean ,env:Record<string, any>){
   const plugins = [vue()]
   
   plugins.push(setupMockPlugin(isBuild))
   autoimport(plugins)
   return plugins
}
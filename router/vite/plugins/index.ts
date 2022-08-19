import { ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import setupMockPlugin from './mock';
export default function setupPlugin(isBuild :boolean ,env:Record<string, any>){
   const plugins = [vue()]
   plugins.push(setupMockPlugin(isBuild))
   return plugins
}
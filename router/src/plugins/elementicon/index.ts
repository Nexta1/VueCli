import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {App} from 'vue'
export default function setupElementIcon(app: App):void{
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
}
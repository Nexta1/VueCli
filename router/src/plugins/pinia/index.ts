import { createPinia } from 'pinia'
import {App} from 'vue'
export default function setPinia(app:App){
    app.use(createPinia())
}
import { CacheEnum } from './../enum/cacheEnum';
import {store} from '@/utils'
export default function logout(){
    store.remove(CacheEnum.TOKEN_NAME)
}
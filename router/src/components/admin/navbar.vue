<template>
  <div class="h-100vh">
    <el-row class="bg-slate-400 h-12 items-center">
      <el-col :span="18">
        <i
          class="fas fa-angle-left ml-4 cursor-pointer"
          @click="menuStore.closeMenu"
          :class="{ 'rotate-180': !menuStore.isclose, 'duration-300': true }"
        ></i>
       <breadcrumb/>
      </el-col>
      <el-col :span="4" class="flex justify-center" > 
        <el-badge value="new" class="item " @click.stop="isshow">
    <el-button>comments</el-button>
  </el-badge>
        <notification v-if='show'/>
      </el-col>
      <el-col :span="2">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="40" src="../../../public/images/login1.jpg" class="align-middle cursor-pointer" />
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人资料</el-dropdown-item>
              <el-dropdown-item>网站首页</el-dropdown-item>
              <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <i class="fas fa-maximize text-yellow-50 cursor-pointer text-right" @click="fullScreen"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import notification from './navbar/notification.vue'
import breadcrumb from './navbar/breadcrumb.vue'
import userInfo from '@/store/userStore'
import store from '@/store/menuStore'
import { user } from '@/utils'
import { useRouter } from 'vue-router'
import { nextTick, ref } from 'vue'
const userinfo = userInfo().info!
const router = useRouter()
const logout = () => {
  user()
  router.push({ name: 'login' })
}
const menuStore = store()

const fullScreen = () => {
  document.documentElement.requestFullscreen()
}
const show = ref(false)
const isshow =()=>{
  show.value = !show.value

}
nextTick(
  ()=>{
    document.documentElement.addEventListener('click',()=>show.value = false)
  }
)
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>

<template>
  <div class="h-100vh">
    <el-row class="bg-slate-400 h-12 items-center">
      <el-col :span="22">
        <i
          class="fas fa-angle-left ml-4 cursor-pointer"
          @click="menuStore.closeMenu"
          :class="{ 'rotate-180': !menuStore.isclose, 'duration-300':true}"
        ></i>
        <el-breadcrumb separator="/" class="ml-4 inline-block">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
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
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import userInfo from '@/store/userStore'
import store from '@/store/menuStore'
import { user } from '@/utils'
import { useRouter } from 'vue-router'
const userinfo = userInfo().info!
const router = useRouter()
const logout = () => {
  user()
  router.push({ name: 'login' })
}
const menuStore = store()
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>

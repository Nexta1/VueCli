<template>
    <div class="inline-block">
        <el-breadcrumb separator="/" class="ml-4 inline-block">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(route,index) in menuStore.bread" :key="index">{{route.meta.menu.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import store from '@/store/menuStore'
const menuStore = store()
</script>

<style scoped>

</style>
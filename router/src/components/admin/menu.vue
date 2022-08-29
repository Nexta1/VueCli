<template>
  <div class="w-[220px] bg-gray-800 min-h-screen duration-300 whitespace-nowrap" :class="{'width':routeStore.isclose}">
    <i class="titleicon fas fa-rocket"></i>
    <span class="title" :class="{'h1':routeStore.isclose}"> 个人空间 </span>
    <dl class="mt-4 cursor-pointer" v-for="(route, index) in menuStore" :key="index">
      <dt @click="handle(route)" :class="{'!justify-center':routeStore.isclose}">
        <i :class="['text-sm', route.icon, 'text-red-300','items-center']">
          <span class="ml-3 text-white font-bold" :class="{'h1':routeStore.isclose}">{{ route.title }}</span>
        </i>
        <i class="fas fa-angle-down duration-300" :class="[{ 'rotate-180': route.active },{'h1':routeStore.isclose}]"></i>
      </dt>
      <dd 
        v-for="(child, index) in route.children"
        :class="[{ active: child?.ischeck }, 'bg-gray-600',{'h1':routeStore.isclose}]"
        v-show="route.active"
        :key="index"
        @click="handle(route, child)"
      >
        {{ child?.title }}
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
//pinia
import { IMenu } from '#/menu'
import store from '@/store/menuStore'
import { useRouter } from 'vue-router'

const routeServcie = useRouter()
const routeStore = store()
routeStore.init()

//pinia
const menuStore = routeStore.menus
console.log(menuStore);

//composition


const resetMenus = () => {
  menuStore.forEach(pRoute => {
    pRoute.active = false
    pRoute.children?.forEach(route => {
      if (route) route.ischeck = false
    })
  })
}
const handle = (pRoute: IMenu, cRoute?: any) => {
  resetMenus()
  pRoute.active = true
  if (cRoute) {
    cRoute.ischeck = true
    routeServcie.push({ name: cRoute.route })
  }
}
</script>

<style scoped>
dd {
  @apply text-white ml-5 mr-3 hover:bg-red-500 p-1 pl-3 rounded-md text-sm mt-2;
}
dt {
  @apply text-white flex items-center justify-between m-3  cursor-pointer;
}
.active {
  background: red !important;
}
.title {
  @apply text-white font-bold align-middle text-lg;
}
.titleicon {
  @apply text-red-500 text-xl m-4 align-middle;
}

.h1{
  @apply hidden text-center m-0
  
}
.width{
  @apply w-[50px] duration-500
}
</style>

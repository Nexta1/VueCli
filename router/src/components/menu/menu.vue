<template>
  <div class="w-[220px] bg-gray-800">
    <i class="titleicon fas fa-rocket"></i>
    <span class="title"> 个人空间 </span>

    <dl class="mt-4 cursor-pointer" v-for="(item, index) in menus" :key="index">
      <dt @click="handle(item)">
        <i :class="['text-sm', item.icon, 'text-red-300']">
          <span class="ml-3 text-white font-bold">{{ item.title }}</span>
        </i>
        <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': item.active }"></i>
      </dt>
      <dd v-for="(child, index) in item.children" :class="[{ active: child.active },'bg-gray-600']" v-show="item.active" :key="index">
        {{ child.title }}
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { reactive } from '@vue/reactivity'
import { router } from '@/store/router'
const routerStore = router()
console.log(routerStore.addcount);

interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}

const menus = reactive<IMenu[]>([
  {
    title: '我的世界',
    icon: 'fas fa-dove',
    active: true,
    children: [{ title: '中国', active: true }, { title: '美国' }, { title: '英国' }],
  },
  { title: '编辑器', icon: 'fab fa-wordpress', children: [{ title: '富文本编辑器' }, { title: 'MarkDown' }] },
])
const resetMenus = () => {
  menus.forEach(pmenu => {
    pmenu.active = false
    pmenu.children?.forEach(menu => {
      menu.active = false
    })
  })
}
const handle = (pmenu: IMenu, cmenu?: IMenuItem) => {
  resetMenus()
  pmenu.active = true
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
</style>

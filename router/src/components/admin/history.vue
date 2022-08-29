<template>
  <div >
    <div  class="flex">
      <el-button color="#A3A6AD" class="ml-2 mt-2 mb-2" v-for="(item, index) in data" :key="index" @click="push(item)">
        {{ item.title }}<el-icon  class="ml-4" @click="del(item)"><CircleClose /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">

import store from '@/store/menuStore'
import { IMenu } from '#/menu'
import { useRouter } from 'vue-router'
const router = useRouter()
const history = store()
const data = history.historyMenu
const del =(x:IMenu)=> history.removeHistoryMenu(x)
const push =(x:IMenu) => router.push({name:x.route})

</script>

<style scoped></style>

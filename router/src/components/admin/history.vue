<template>
  <div>
    <div class="flex">
      <el-button
        color="#A3A6AD"
        class="ml-2 mt-2 mb-2"
        v-for="(item, index) in data"
        :key="index"
        @click="push(item)"
        :class="{ active: $route.name == item.route }"
      >
        {{ item.title }}<el-icon class="ml-4" @click="history.removeHistoryMenu(item)"><CircleClose /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from '@/store/menuStore'
import { IMenu } from '#/menu'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const history = store()


const data = history.historyMenu
const push = (x: IMenu) => {
  router.push({ name: x.route })
}
</script>

<style scoped>
.active {
  background: red !important;
}
</style>

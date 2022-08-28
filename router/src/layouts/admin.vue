<template>
  <div class="flex h-screen">
    <Menu  />
    <div class="flex-1 bg-zinc-300">
      <Navbar />
      <history />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from '../components/admin/menu.vue'
import Navbar from '../components/admin/navbar.vue'
import history from '../components/admin/history.vue'
import store from '@/store/menuStore'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
const route = useRoute()
const menuStore = store()
watch(
  route,
  () => {
    menuStore.addHistoryMenu(route)
  },
  { immediate: true }
)

</script>

<style scoped></style>
<script lang="ts"></script>

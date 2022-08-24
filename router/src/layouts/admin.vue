<template>
  <div class="flex w-screen h-screen">
    <MenuComponent />
    <div class="right flex-1 bg-zinc-300">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuComponent from '../components/menu/menu.vue'
import Navbar from '../components/menu/navbar.vue'
</script>

<style scoped></style>
<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>

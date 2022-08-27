<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<script lang="ts">
export default {
  route: { meta: { show: true, icon: 'fab fa-elementor', title: '错误页面', } },
}
</script>

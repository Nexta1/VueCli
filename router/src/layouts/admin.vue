<template>
  <router-view />
</template>

<script setup lang="ts"></script>

<style scoped></style>

<script lang="ts">
export default {
  router: { meta: { auth: true } },
}
</script>

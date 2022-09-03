<template>
  <div>
    <Editor v-model="content" :height="500" placeholder="请输入内容" />
    {{content}}
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
const content = ref('')
</script>

<style scoped></style>

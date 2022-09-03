<template>
<div id="editor">
</div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import wangEditor from './wangEditor'
// dom渲染后执行 ，或采用setTimeout
nextTick(()=>new wangEditor('#editor'))
</script>

<style scoped>

</style>
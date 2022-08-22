<template>
    <div>
        <button @click="push">后台</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const push = ()=>{
    router.push({name:'admin'})
}
</script>

<style scoped>

</style>
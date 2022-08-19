<template>
  <div class="h-screen w-screen flex justify-center items-center bg-blue-100 p-5">
    <div class="rounded-xl w-[720px] h-[320px] shadow-xl border-2  md:grid grid-cols-2 overflow-hidden bg-white" >
      <div>
        <img src="../../../public/images/back.jpg" alt="" class="object-cover rounded-md h-full hidden md:block" />
      </div>
      <div class="p-12">
        <h2 class="text-center font-bold text-3xl   bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">你好！世界</h2>
        <input type="password" name="" id="" placeholder="请输入账号" />
        <input type="password" name="" id="" placeholder="请输入密码" />
        <button>登录</button>
        <div class="flex mt-4 justify-around">
            <a href="">网站首页</a>
            <a href="">注册账号</a>
            <a href="">找回密码</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
input {
  @apply w-full mt-5 h-8 pl-2  rounded-md outline-none ring-2 focus:ring-offset-2 ring-blue-400 duration-300 border-none;
}
button {
  @apply text-white bg-gradient-to-r from-green-400 to-blue-600 w-full h-8 font-bold mt-6 rounded-xl;
}
</style>

<template>
  <div>
   <input type="text" v-model="usernameValue" >
   {{usernameError}}
  </div>
  <button>提交</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Form, Field, ErrorMessage,defineRule,useField, } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import {localize} from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
defineRule('required', required)
defineRule('email', email)
const onSubmit = V => {
  console.log(V)
}
const {errorMessage:usernameError,value:usernameValue} =useField('username',{required:true,email:true},)

</script>

<style scoped>
div {
  color: black;
  display: flex;
  @apply items-center justify-center;
}
input {
  @apply mt-5 h-8 pl-2  rounded-md outline-none ring-2 focus:ring-offset-2 ring-blue-400 duration-300 border-none;
}
</style>

<!-- <script>
//会被module收到
export default {
    route:{path:'/user'}
}
</script> -->

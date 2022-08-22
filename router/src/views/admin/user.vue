<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" v-model="usernameValue" @change="handleChange " />
      {{ usernameError }}
      <button>提交</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import validate from '../../plugins/validate/index'
const {handleSubmit}= validate.useForm({validationSchema:{
  username:validate.yup.string().required().label('用户名').email()
}})
const { errorMessage: usernameError, value: usernameValue ,handleChange} = validate.useField('username',{},{validateOnValueUpdate:false})
const onSubmit = handleSubmit(v=>{
  console.log(v)
})
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

<script lang="ts">
//会被module收到

</script>

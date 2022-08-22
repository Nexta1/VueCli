<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(../../../public/images/back.jpg)">
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 class="text-4xl font-bold text-white">MyWorld</h2>

            <p class="max-w-xl mt-3 text-gray-300">
              无限长的曲线就是宇宙的抽象，一头连着无限的过去，另一头连着无限的未来，中间只有无规律无生命的随机起伏，一个个高低错落的波峰就像一粒粒大小不等的沙子，整条曲线就像是所有沙粒排成行形成的一维沙漠，荒凉寂寥，长得更令人无法忍受。你可以沿着它向前向后走无限远，但永远找不到归宿。
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">MyWorld</h2>

            <p class="mt-3 text-gray-500 dark:text-gray-300">登陆你的账户</p>
          </div>

          <div class="mt-8">
            <form @submit="onSubmit">
              <div>
                <label for="phone" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">用户名</label>
                <input
                  v-model="accountValue"
                  type="type"
                  name="account"
                  id="account"
                  placeholder="请输入邮箱或手机号"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="text-white text-xs mt-2">{{ accountError }}</div>
              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 dark:text-gray-200">账号密码</label>
                  <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >忘记密码?</a
                  >
                </div>

                <input
                  v-model="passwordValue"
                  type="password"
                  name="password"
                  id="password"
                  @change="handleChange"
                  placeholder="请输入密码"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="text-white text-xs mt-2">{{ passwordError }}</div>
              <div class="mt-6">
                <button
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  登录
                </button>
              </div>
              <div class="flex justify-center">
                <i class="fa-brands fa-weixin text-green-600 cursor-pointer mt-4 text-xl mr-5"></i>
                <i class="fa-brands fa-alipay text-blue-400 cursor-pointer mt-4 text-xl mr-5"></i>
                <i class="fa-brands fa-qq text-blue-800 cursor-pointer mt-4 text-xl mr-5"></i>
                <i class="fa-brands fa-tiktok text-red-300 cursor-pointer mt-4 text-xl mr-5"></i>
                <i class="fa-brands fa-weibo text-red-400 cursor-pointer mt-4 text-xl mr-5"></i>
              </div>
            </form>
            <p class="mt-4 text-sm text-center text-gray-400">
              还没有账号?
              <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">注册</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import util from '@/utils'
import Userapi from '@/apis/userApis'
import validate from '@/plugins/validate/index'
import { useRouter } from 'vue-router';
const router = useRouter()
const { handleSubmit } = validate.useForm({ initialValues: { account: '798868370@qq.com', password: '123456' } })
const { errorMessage: accountError, value: accountValue } = validate.useField(
  'account',
  validate.yup
    .string()
    .required()
    .label('账户')
    .matches(/^.+@.+|\d{11}$/)
)

const {
  value: passwordValue,
  errorMessage: passwordError,
  handleChange,
} = validate.useField('password', validate.yup.string().required().label('密码').min(6))
const onSubmit = handleSubmit(async v => {
  const {
    result: { token },
  } = await Userapi.login(v)
  util.store.set('token', {
    token,
  })
router.push({name:'home'})
})
</script>

<style scoped></style>

<script lang="ts">
export default {
  route: { name: 'login',meta:{guest:true} },
}
</script>

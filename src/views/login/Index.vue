<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const checkPhone = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入手机号'))
  } else if (/^1\d{10}$/.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确手机号'))
  }
}

const loginPassword = ref(true)
const checked = ref(false)
const formEl = ref()

const form = reactive({
  phone: '',
  password: '',
  code: ''
})

const rules = reactive({
  phone: [
    {
      required: true,
      validator: checkPhone,
      trigger: 'change'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    }
  ]
})

// 获取验证码
const getCode = () => {
  alert('d')
}

// 登录
const onSubmit = () => {
  router.replace('/user')
  if (!formEl.value) return
  formEl.value.validate((valid: boolean) => {
    if (valid) {
      router.replace('/user')
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

function handleInput(value: string) {
  // 使用正则表达式限制输入的手机号格式
  form.phone = value.replace(/[^\d]/g, '')
}
</script>

<template>
  <div class="bg-[rgba(232,237,195,0.3)] bg-[url('@/assets/images/loginbg.png')] bg-contain">
    <header class="max-w-[1852] w-full h-[72px] px-4" style="margin-bottom: -72px">
      <router-link to="/"><img src="@/assets/images/logo.svg" alt="" srcset="" /></router-link>
    </header>
    <div class="h-[100vh] w-[100vw] flex items-center max-w-[1200px]" style="margin: 0 auto">
      <main class="w-[434px] m-4">
        <div class="text-2xl mb-[60px]">
          <span
            class="mr-[90px] cursor-pointer tabs"
            :class="loginPassword ? 'text-black active' : 'text-[#a2a2a2]'"
            @click="loginPassword = true"
            >密码登录</span
          >
          <span
            class="cursor-pointer tabs"
            :class="!loginPassword ? 'text-black active' : 'text-[#a2a2a2]'"
            @click="loginPassword = false"
            >验证码登录</span
          >
        </div>
        <el-form
          ref="formEl"
          :model="form"
          :rules="rules"
          label-width="auto"
          style="max-width: 600px"
        >
          <el-form-item label="" prop="phone">
            <el-input
              v-model.number="form.phone"
              placeholder="请输入手机号码"
              size="large"
              class="h-[56px] rounded-3xl"
              @input="handleInput"
            >
              <template #prefix>
                <img src="@/assets/images/phone-icon.svg" alt="" srcset="" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="" key="password" v-if="loginPassword">
            <el-input
              v-model="form.password"
              placeholder="请输入密码"
              size="large"
              class="h-[56px] rounded-3xl"
              type="password"
              show-password
            >
              <template #prefix>
                <img src="@/assets/images/lock-icon.svg" alt="" srcset="" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code" label="" key="code" v-if="!loginPassword">
            <el-input
              v-model="form.code"
              placeholder="请输入验证码"
              size="large"
              class="h-[56px] rounded-3xl"
              type="password"
              show-password
            >
              <template #prefix>
                <img src="@/assets/images/code-icon.svg" alt="" srcset="" />
              </template>
              <template #suffix>
                <span class="text-[#2563EB] cursor-pointer" @click="getCode">获取验证码</span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="mt-[50px]">
            <el-button
              type="primary"
              @click="onSubmit"
              class="w-full !h-[60px] !text-xl !bg-[#E47531] !rounded-3xl !border-0"
              >登录</el-button
            >
          </el-form-item>
        </el-form>

        <div class="flex items-center mb-10">
          <el-checkbox v-model="checked" size="large" class="!mr-2" />
          <p>同意并阅读《用户协议》和《隐私政策》</p>
        </div>
        <div class="text-center">
          还没有账号？<router-link to="/reg" class="text-[#2563EB]">立即注册</router-link>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(.el-input__wrapper) {
  border-radius: 20px;
  background: #e9ecd6;
  border-color: 1px solid #e2e8f0;
}
.submit {
}
.tabs.active {
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    content: '';
    height: 6px;
    background: rgba(228, 117, 48, 0.8);
    border-radius: 6px;
  }
}
</style>

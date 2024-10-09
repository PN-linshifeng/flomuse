<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'logout':
      userStore.logout()
      break
  }
}
</script>
<template>
  <div class="h-[50px] py-1 px-4 bg-black rounded-full leading-[42px]">
    <div v-if="userStore.isLogin">
      <img
        :src="userStore.user?.avatar"
        alt=""
        srcset=""
        class="h-[42px] w-[42px] rounded-full inline-block mr-3"
      />
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="text-white leading-[42px]">
          {{ userStore.user?.name }}
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div v-else class="text-white text-base leading-[42px] cursor-pointer">
      <RouterLink to="/login">登录</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavIndex from '@/components/nav/nav-index.vue'
import NavItem from '@/components/nav/nav-item.vue'
import User from '@/components/user/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div
    class="w-[100vw] h-[100vh] overflow-hidden flex flex-col gap-8 bg-[#FEF8EF] bg-[url('@/assets/images/document-bg.png')] bg-contain p-8 pb-4"
  >
    <NavIndex class="!justify-between !items-conter">
      <img src="@/assets/images/logo.svg" alt="" srcset="" class="left-10 h-16 ml-5" />
      <NavItem>
        <RouterLink to="/?banner" class="bg-[#b1dccc] text-black">旋律生成</RouterLink>
        <RouterLink to="/?about">关于我们</RouterLink>
        <RouterLink to="/?serve">服务介绍</RouterLink>
        <RouterLink to="/?buy">订阅方案</RouterLink>
      </NavItem>
      <User></User>
    </NavIndex>
    <div class="flex-1 overflow-hidden flex gap-8 pb-2">
      <div class="w-[330px] px-7 pt-10 border border-black rounded-2xl bg-white">
        <h3 class="text-xl font-bold">服务条款</h3>
        <ul
          class="*:my-3 *:flex *:items-center *:gap-2 [&_span]:size-2 [&_span]:rounded-full [&_a]:flex [&_a]:items-center [&_a]:gap-2 [&_a]:text-[#a2a2a2]"
        >
          <li>
            <RouterLink
              to="/"
              :class="route.fullPath === '/documents/user-agement' ? ' !text-black' : ''"
            >
              <span class="bg-[#B1DCCC]"></span> 复音科技网站服务协议
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <span class="bg-[#B1DCCC]"></span> 复音科技用户服务协议
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/"> <span class="bg-[#B1DCCC]"></span> 复音科技隐私政策 </RouterLink>
          </li>
          <li>
            <RouterLink to="/"> <span class="bg-[#B1DCCC]"></span> 儿童隐私保护声明 </RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex-1 px-7 py-10 border border-black rounded-2xl bg-white">
        <div class="overflow-auto h-full scroll-smooth">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

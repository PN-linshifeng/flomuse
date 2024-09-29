<script setup lang="ts">
import { ref } from 'vue'
import buy from '@/components/buy/index.vue'
import AppFooter from '@/components/footer/index.vue'
import { useRoute } from 'vue-router'
import type { BuyType } from '@/types'

const route = useRoute()
const type = ref<BuyType | undefined>()
type.value = route.query.type?.toString() as BuyType
</script>
<template>
  <div class="bg-[#fff8f1]">
    <div class="bg-white">
      <div class="max-w-page mx-auto h-[70px] flex items-center">
        <div>
          <RouterLink to="/">
            <img src="@/assets/images/logo.svg" alt="" srcset="" class="w-[160px]"
          /></RouterLink>
        </div>
        <div>
          <span class="text-xl border-l border-black px-2">支付中心</span>
        </div>
      </div>
    </div>
    <div class="h-[160px] bg-[url('@/assets/images/pay-bg.jpg')] mb-[-132px]"></div>
    <div class="pb-10">
      <buy :buy-type="type"></buy>
    </div>
    <AppFooter class="bg-white"></AppFooter>
  </div>
</template>

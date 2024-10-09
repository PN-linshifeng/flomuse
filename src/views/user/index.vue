<script setup lang="ts">
import { ref } from 'vue'
import { ElDialog } from 'element-plus'
import NavIndex from '@/components/nav/nav-index.vue'
import NavItem from '@/components/nav/nav-item.vue'
import { useRoute } from 'vue-router'
import musicNav from './components/music-nav.vue'
import shelfNav from './components/shelf-nav.vue'
import musicBar from './components/music-bar.vue'
import lineSpectrum from './components/line-spectrum.vue'
import abc from './components/abc.vue'
import abcCodeDialog from './components/abc-code-dialog.vue'
import User from '@/components/user/index.vue'

const route = useRoute()

const abcDialogVisible = ref(true)

function closeAbcDialogVisible() {
  abcDialogVisible.value = false
}
</script>
<template>
  <div
    class="w-[100vw] flex flex-col gap-5 bg-[#FEF8EF] bg-[url('@/assets/images/document-bg.png')] bg-contain p-8 pb-4"
  >
    <NavIndex class="justify-between !items-conter">
      <!-- <img src="@/assets/images/logo.svg" alt="" srcset="" class="left-10 h-16 ml-5 mr-[120px]" /> -->
      <NavItem>
        <RouterLink to="?music" class="bg-[#b1dccc] text-black">生成旋律</RouterLink>
        <RouterLink to="?file">文件</RouterLink>
        <RouterLink to="?serve">训练模式</RouterLink>
        <RouterLink to="?user">用户</RouterLink>
      </NavItem>
      <User></User>
    </NavIndex>

    <div
      class="flex-1 border border-black rounded-2xl overflow-hidden flex flex-col px-4 py-5 bg-[#E6E9ED]"
    >
      <musicBar></musicBar>

      <div class="flex-1 overflow-hidden flex gap-4 bg-[#E6E9ED]">
        <div class="w-[360px] flex gap-4 flex-col *:flex *:w-full j">
          <div>
            <musicNav class="w-full h-[345px]"></musicNav>
          </div>
          <div>
            <shelfNav class="w-full h-[400px]"></shelfNav>
          </div>
        </div>
        <div class="flex-1">
          <lineSpectrum class="mb-4"></lineSpectrum>
          <abc></abc>
        </div>
      </div>
    </div>

    <!-- ABC代码生成 -->
    <el-dialog
      v-model="abcDialogVisible"
      width="30%"
      :show-close="false"
      class="bg-transparent w-[1200px]"
    >
      <abcCodeDialog :close="closeAbcDialogVisible"></abcCodeDialog>
    </el-dialog>
  </div>
</template>

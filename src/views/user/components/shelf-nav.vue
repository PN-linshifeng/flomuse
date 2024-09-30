<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/card/index.vue'

const radio = ref('')
</script>
<template>
  <Card title="我的乐谱架">
    <div class="p-4 h-[371px]">
      <header class="flex items-center h-9 bg-green-10 rounded-md px-4 gap-3">
        <div>标题</div>
      </header>
      <div class="max-h-[calc(100%-80px)] h-full overflow-auto px-4">
        <el-radio-group v-model="radio">
          <el-radio v-for="k of 19" :key="k" :value="k">爱的魔力转圈圈C大调曲目</el-radio>
        </el-radio-group>
      </div>
      <div class="text-center pt-4">
        <el-button round class="text-black">新建乐谱夹</el-button>
        <el-button round class="text-black" disabled>删除乐谱夹</el-button>
      </div>
    </div>
  </Card>
</template>

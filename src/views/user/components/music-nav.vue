<script setup lang="ts">
import Card from '@/components/card/index.vue'
</script>
<template>
  <Card title="乐谱列表">
    <div class="p-4 h-[calc(100%-0px)]">
      <header class="flex items-center h-9 bg-green-10 rounded-md px-4 gap-3">
        <div class="w-9 text-center">编号</div>
        <div class="border-l h-4 border-slate-300 w-0"></div>
        <div>标题</div>
      </header>
      <div class="max-h-[calc(100%-36px)] h-[248px] overflow-auto">
        <div class="flex items-center h-9 rounded-md pl-4 gap-3" v-for="k of 19" :key="k">
          <div class="w-9 flex-none text-center">01</div>
          <div class="border-l h-4 border-transparent w-0"></div>
          <div class="truncate">爱的魔力转圈圈C大调曲目</div>
        </div>
      </div>
    </div>
  </Card>
</template>

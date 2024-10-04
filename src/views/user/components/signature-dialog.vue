<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/card/index.vue'

const props = defineProps<{
  close: () => void
}>()

const data = ref([
  { select: false },
  { select: false },
  { select: false },
  { select: false },
  { select: false },
  { select: false },
  { select: false },
  { select: false }
])

function handleSelect(index: number) {
  data.value[index].select = !data.value[index].select
}
function play(index: number) {
  console.log(index)
}
</script>
<template>
  <Card @close="close" show-close title="调号" class="mt-[-2px] w-[700px]">
    <div class="p-4">
      <h3 class="font-bold mb-2">升号或降号</h3>
      <div class="flex flex-wrap gap-4 justify-stretch max-h-[230px] overflow-auto">
        <div
          v-for="k in 3"
          class="w-20 h-16 p-1 bg-[#EEEEEE] rounded flex items-center justify-center cursor-pointer border-[#EEEEEE] border-2 hover:border-theme"
        >
          <img
            src="@/assets/images/tiaohao.png"
            alt=""
            srcset=""
            style="mix-blend-mode: multiply"
          />
        </div>
      </div>

      <h3 class="font-bold my-2 pt-2">升号系列大调</h3>
      <div class="flex flex-wrap gap-4 justify-stretch max-h-[230px] overflow-auto">
        <div
          v-for="k in 7"
          class="w-20 h-16 p-1 bg-[#EEEEEE] rounded flex items-center justify-center cursor-pointer border-[#EEEEEE] border-2 hover:border-theme"
        >
          <img
            src="@/assets/images/tiaohao.png"
            alt=""
            srcset=""
            style="mix-blend-mode: multiply"
          />
        </div>
      </div>

      <h3 class="font-bold my-2 pt-2">降号系列大调</h3>
      <div class="flex flex-wrap gap-4 justify-stretch max-h-[230px] overflow-auto">
        <div
          v-for="k in 4"
          class="w-20 h-16 p-1 bg-[#EEEEEE] rounded flex items-center justify-center cursor-pointer border-[#EEEEEE] border-2 hover:border-theme"
        >
          <img
            src="@/assets/images/tiaohao.png"
            alt=""
            srcset=""
            style="mix-blend-mode: multiply"
          />
        </div>
      </div>

      <h3 class="font-bold my-2 pt-2">升号系列小调</h3>
      <div class="flex flex-wrap gap-4 justify-stretch max-h-[230px] overflow-auto">
        <div
          v-for="k in 2"
          class="w-20 h-16 p-1 bg-[#EEEEEE] rounded flex items-center justify-center cursor-pointer border-[#EEEEEE] border-2 hover:border-theme"
        >
          <img
            src="@/assets/images/tiaohao.png"
            alt=""
            srcset=""
            style="mix-blend-mode: multiply"
          />
        </div>
      </div>
      <div class="dialog-footer mt-4 text-right">
        <el-button @click="close()">取 消</el-button>
        <el-button type="primary" @click="close()" class="hover:bg-theme hover:border-theme"
          >确 定</el-button
        >
      </div>
    </div>
  </Card>
</template>

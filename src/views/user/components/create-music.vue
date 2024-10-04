<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/card/index.vue'

const emit = defineEmits<{ close: [] }>()

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
  <Card title="旋律生成">
    <div class="p-4 h-[calc(100%-0px)]">
      <header class="text-center text-base pb-4">
        生成了2条旋律，您更喜欢哪一首？您选择的旋律将被保留
      </header>
      <div class="max-h-[350px] overflow-auto">
        <div
          class="group relative border-2 rounded-lg text-center mb-4 overflow-hidden cursor-pointer"
          v-for="(k, index) of data"
          :class="k.select ? 'active border-theme' : ''"
          @click="handleSelect(index)"
          :key="k.toString()"
        >
          <img
            src="@/assets/images/xuanlv.jpg"
            alt=""
            srcset=""
            class="max-w-[775px] max-h-[106px] inline-block"
          />
          <span
            @click="play(index)"
            class="bg-green absolute left-2 bottom-2 cursor-pointer w-7 h-7 flex items-center justify-center z-10 rounded-full"
          >
            <img src="@/assets/images/play.svg" alt="" srcset="" />
          </span>
          <div
            class="hidden group-[.active]:block absolute z-10 right-0 bottom-0 after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0 after:border-theme after:border-[16px] after:z-10 after:border-[transparent_#479478_#479478_transparent]"
          >
            <el-icon :size="14" class="absolute z-20 right-1 bottom-1 fill-white text-white">
              <Select />
            </el-icon>
          </div>
        </div>
      </div>
      <div class="dialog-footer mt-4 text-right">
        <el-button @click="emit('close')">取 消</el-button>
        <el-button type="primary" @click="emit('close')" class="hover:bg-theme hover:border-theme"
          >确 定</el-button
        >
      </div>
    </div>
  </Card>
</template>

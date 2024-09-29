<script setup lang="ts">
import { ref } from 'vue'

const loop = ref(true)
const playSpeed = ref(30)
const scale = ref(1)
const page = ref('2/3')
const size = ref(1000)
const loopAll = ref(true)
const line = ref(true)
const expression = ref(true)
const term = ref(true)
</script>
<template>
  <div
    class="flex gap-4 h-[70px] border border-black rounded-xl mb-4 bg-white px-4 py-5 *:flex *:items-center"
  >
    <div class="flex items-center">
      <div class="size-7 rounded-full bg-green flex justify-center items-center cursor-pointer">
        <img src="@/assets/images/file.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="flex items-center">
      <div class="size-7 rounded-full bg-green flex justify-center items-center cursor-pointer">
        <img src="@/assets/images/save.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="w-0 border-l border-[#EAEAEA]"></div>
    <div class="flex items-center">
      <div class="size-7 rounded-full bg-green flex justify-center items-center cursor-pointer">
        <img src="@/assets/images/play.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="w-0 border-l border-[#EAEAEA]"></div>
    <div>
      <el-checkbox v-model="loop">循环播放</el-checkbox>
    </div>
    <div>
      <div class="text-nowrap pr-1">播放速度：</div>
      <el-slider v-model="playSpeed" class="!w-[100px]"></el-slider>
    </div>
    <div>
      <div class="text-nowrap pr-1">缩放：</div>
      <el-slider v-model="scale" class="!w-[100px]"></el-slider>
    </div>
    <div>
      <span>页：</span>
      <el-select v-model="page" placeholder="请选择" class="!w-[80px]">
        <el-option v-for="item in ['1/3', '2/3', '3/3']" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
    </div>
    <div>
      <span class="text-nowrap">每行小节数：</span>
      <el-input v-model="size" placeholder="请输入内容" class="!w-24"></el-input>
    </div>
    <div>
      <el-checkbox v-model="loopAll">循环播放</el-checkbox>
    </div>
    <div>
      <el-checkbox v-model="line">展示跨小节连线</el-checkbox>
    </div>
    <div>
      <el-checkbox v-model="expression">展示表情</el-checkbox>
    </div>
    <div>
      <el-checkbox v-model="term">展示术语</el-checkbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElForm, ElFormItem, ElButton, ElDialog } from 'element-plus'
import Card from '@/components/card/index.vue'
import { useAbcCodeStore } from '@/stores/abcCode'
import createMusic from './create-music.vue'
import SignatureDialog from './signature-dialog.vue'
import low from '@/assets/images/yinpu-1.svg'
import high from '@/assets/images/yinpu-3.svg'

interface List {
  name: string
  id: string
}

defineProps<{
  close: () => void
}>()

const abcCodeStore = useAbcCodeStore()

const configData = ref<List[]>([
  {
    name: '我的配置-1',
    id: 'rfgdg'
  }
])
const visible = ref(false)
const createMusicVisible = ref(false)
const signatureDialogVisible = ref(false)

const baseData = [
  {
    name: '低',
    image: low
  },
  {
    name: '高',
    image: high
  }
]

function closeVisible() {
  visible.value = false
}
function closeSignatureDialogVisible() {
  signatureDialogVisible.value = false
}
function handleCreateMusic() {
  createMusicVisible.value = true
}
// 基础配置
function handleBase(name: string) {
  const index = abcCodeStore.formData.base.findIndex((k) => k === name)
  if (index >= 0) {
    abcCodeStore.formData.base.splice(index, 1)
  } else {
    abcCodeStore.formData.base.push(name)
  }
}
// getBaseImage
function getBaseImage(name: string) {
  return baseData.find((k) => k.name === name)?.image
}

// 添加乐段配置
function addConfig() {
  abcCodeStore.formData.config.push({
    size: 0,
    weak: '是'
  })
}
// 删除乐段配置、
function delConfig(index: number) {
  abcCodeStore.formData.config.splice(index, 1)
}
</script>
<template>
  <Card title="ABC代码生成" show-close @close="close">
    <div class="flex gap-4 p-6 text-sm text-black">
      <div class="w-[200px]">
        <h1 class="font-bold mb-4">旋律生成配置</h1>
        <ul class="max-h-96 overflow-auto pr-2">
          <li
            v-for="k of abcCodeStore.configData"
            :key="k.id"
            class="cursor-pointer leading-9 mb-1 rounded px-4 hover:bg-green-10 hover:shadow-[3px_0px_0px_0px_#B1DCCC]"
          >
            <el-radio-group v-model="abcCodeStore.currId">
              <el-radio :key="k.id" :value="k.id">{{ k.name }}</el-radio>
            </el-radio-group>
          </li>
        </ul>
        <div class="text-center pt-4">
          <el-button round class="text-black" @click="abcCodeStore.createConfig()"
            >新建配置</el-button
          >
          <el-button
            round
            class="text-black"
            :disabled="abcCodeStore.currId.length === 0"
            @click="abcCodeStore.delConfig()"
            >删除配置</el-button
          >
        </div>
      </div>
      <div class="flex-1">
        <el-form :inline="true" :model="abcCodeStore.formData" class="demo-form-inline">
          <div class="border-b leading-8 mb-4 font-bold">
            <span class="inline-block w-1 h-3 rounded bg-green"></span> 基本信息
          </div>
          <div>
            <el-form-item label="配置名称：">
              <el-input v-model="abcCodeStore.formData.name"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="排号：">
              <el-select v-model="abcCodeStore.formData.paihao" placeholder="请选择" class="w-20">
                <el-option
                  v-for="item in ['1/2', '1/4', '1/8']"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="调式：">
              <el-input
                v-model="abcCodeStore.formData.tiaoshi"
                class="w-20"
                @click="signatureDialogVisible = true"
              ></el-input>
            </el-form-item>
            <el-form-item label="主音：">
              <el-select v-model="abcCodeStore.formData.zhuyin" placeholder="请选择" class="w-20">
                <el-option
                  v-for="item in ['C', '1/4', '1/8']"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="音域：" class="!mr-3">
              <el-input v-model="abcCodeStore.formData.yinyu[0]" class="w-20"></el-input>
            </el-form-item>
            <el-form-item label="~">
              <el-input v-model="abcCodeStore.formData.yinyu[1]" class="w-20"></el-input>
            </el-form-item>
          </div>
          <!-- 乐段配置 -->
          <div class="border-b leading-8 mb-4 font-bold">
            <span class="inline-block w-1 h-3 rounded bg-green"></span> 乐段配置
          </div>
          <div class="bg-[#F8F8F8] border border-[#e8e8e8] px-4 rounded-2xl">
            <div
              v-for="(k, index) of abcCodeStore.formData.config"
              :key="k.size + index"
              class="py-4 border-b border-[#e8e8e8]"
            >
              <div class="font-bold mb-4">乐段{{ index + 1 }}配置：</div>
              <div>
                <el-form-item label="小节数：" class="!mr-3">
                  <el-input-number v-model="k.size" class="w-32"></el-input-number>
                </el-form-item>
                <el-form-item label="是否弱起：">
                  <el-select v-model="k.weak" placeholder="请选择" class="w-20">
                    <el-option
                      v-for="item in ['是', '1/4', '1/8']"
                      :key="item"
                      :label="item"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div>
                <el-button class="text-black" @click="delConfig(index)">删除乐段</el-button>
              </div>
            </div>
            <div class="my-4">
              <el-button class="text-black" @click="addConfig">添加乐段</el-button>
            </div>
          </div>

          <!-- 节奏配置 -->
          <div class="border-b leading-8 mb-4 font-bold mt-4">
            <span class="inline-block w-1 h-3 rounded bg-green"></span> 节奏配置
          </div>
          <div class="flex gap-4">
            <div class="text-center" v-for="(k, index) of abcCodeStore.formData.base" :key="k">
              <div class="mb-1 h-12">
                <img :src="getBaseImage(k)" alt="" srcset="" class="inline-block" />
              </div>
              <div>
                <el-form-item label="" class="!mr-0">
                  <el-select
                    v-model="abcCodeStore.formData.base[index]"
                    placeholder="请选择"
                    class="w-16"
                  >
                    <el-option
                      v-for="item in baseData"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <el-button class="text-black" size="small" @click="visible = true"
              >选择基础节奏型</el-button
            >
          </div>

          <div>
            <el-form-item label="同音连线：">
              <el-select
                v-model="abcCodeStore.formData.tongyinlianxian"
                placeholder="请选择"
                class="w-20"
              >
                <el-option
                  v-for="item in ['无', '1/4', '1/8']"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="生成设置：">
              <el-switch
                v-model="abcCodeStore.formData.createBase"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </div>
          <div class="mt-4">
            <el-button
              @click="abcCodeStore.submit()"
              class="w-[120px] text-white bg-theme border-0 hover:text-white hover:bg-theme"
              >保存配置</el-button
            >
            <el-button
              @click="handleCreateMusic"
              class="w-[120px] text-white bg-yellow border-0 hover:text-white hover:bg-yellow"
              >生成旋律</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
    <!-- 选择基础型节奏 -->
    <el-dialog v-model="visible" width="30%" :show-close="false" class="bg-transparent w-[500px]">
      <Card @close="closeVisible" show-close title="选择基础型节奏" class="mt-[-2px]">
        <div class="p-4">
          <div class="flex flex-wrap gap-4 justify-stretch max-h-[230px] overflow-auto">
            <div
              v-for="k in baseData"
              :key="k.name"
              :class="abcCodeStore.formData.base.includes(k.name) ? '!border-theme' : ''"
              @click="handleBase(k.name)"
              class="w-14 h-12 bg-[#EEEEEE] rounded flex items-center justify-center cursor-pointer border-[#EEEEEE] border-2"
            >
              <img :src="k.image" alt="" srcset="" style="mix-blend-mode: multiply" />
            </div>
          </div>
          <div class="dialog-footer mt-4 text-right">
            <el-button @click="visible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="visible = false"
              class="hover:bg-theme hover:border-theme"
              >确 定</el-button
            >
          </div>
        </div>
      </Card>
    </el-dialog>
    <!-- 旋律生成 -->
    <el-dialog
      v-model="createMusicVisible"
      width="30%"
      :show-close="false"
      class="bg-transparent w-[890px]"
    >
      <createMusic @close="createMusicVisible = false"></createMusic>
    </el-dialog>
    <!-- 调号 -->
    <el-dialog
      v-model="signatureDialogVisible"
      :show-close="false"
      width="30%"
      class="bg-transparent w-[716px]"
    >
      <SignatureDialog
        :close="closeSignatureDialogVisible"
        :value="abcCodeStore.formData.tiaoshi"
        @change="(val) => (abcCodeStore.formData.tiaoshi = val)"
      ></SignatureDialog>
    </el-dialog>
  </Card>
</template>

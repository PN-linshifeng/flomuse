<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/card/index.vue'
import { ElInput } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

interface List {
  name: string
  id: string
}

const data = ref<List[]>([
  {
    name: '国庆来了',
    id: '1212'
  }
])
const formRef = ref<FormInstance>()
const visible = ref(false)
const radio = ref('')
const form = ref({
  name: ''
})
const rules = ref<FormRules>({
  name: [
    {
      required: true,
      message: '请填写名称！'
    }
  ]
})

// 提交
async function submit() {
  await formRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      data.value.push({
        name: form.value.name,
        id: form.value.name
      })
      form.value.name = ''
      visible.value = false
      formRef.value?.resetFields()
    } else {
      console.log('error submit!', fields)
    }
  })
}

function del() {
  data.value = data.value.filter((k) => k.id !== radio.value)
}
</script>
<template>
  <Card title="我的乐谱架">
    <div class="p-4 h-[371px]">
      <header class="flex items-center h-9 bg-green-10 rounded-md px-4 gap-3 mb-2">
        <div>标题</div>
      </header>
      <div class="max-h-[calc(100%-80px)] h-full overflow-auto px-4">
        <el-radio-group v-model="radio" class="!block">
          <el-radio v-for="k of data" :key="k" :value="k.id" class="flex items-center !m-0">{{
            k.name
          }}</el-radio>
        </el-radio-group>
      </div>
      <div class="text-center pt-2">
        <el-button round class="text-black" @click="visible = true">新建乐谱夹</el-button>
        <el-button round class="text-black" :disabled="radio.length === 0" @click="del"
          >删除乐谱夹</el-button
        >
      </div>
    </div>
    <!-- 新建乐谱夹 -->
    <el-dialog v-model="visible" width="30%" :show-close="false" class="bg-transparent">
      <Card @close="visible = false" show-close title="新建乐谱夹" class="mt-[-2px]">
        <div class="p-4 pt-8">
          <div class="">
            <el-form
              ref="formRef"
              style="max-width: 600px"
              :model="form"
              :rules="rules"
              status-icon
              label-position="top"
            >
              <el-form-item label="名称：" prop="name" required>
                <ElInput v-model="form.name"></ElInput>
              </el-form-item>
            </el-form>
          </div>
          <div class="dialog-footer mt-4 text-right">
            <el-button @click="visible = false">取 消</el-button>
            <el-button type="primary" @click="submit" class="hover:bg-theme hover:border-theme"
              >确 定</el-button
            >
          </div>
        </div>
      </Card>
    </el-dialog>
    <!-- 旋律生成 -->
  </Card>
</template>

import { defineStore } from 'pinia'
interface List {
  name: string
  id: string
}

export const useAbcCodeStore = defineStore('abcCode', {
  state: () => {
    return {
      currId: '',
      formData: {
        name: '',
        paihao: '1/2',
        tiaoshi: '',
        zhuyin: '1/4',
        yinyu: ['', ''],
        config: [
          {
            size: 0,
            weak: '是'
          }
        ],
        base: [] as string[],
        tongyinlianxian: '',
        createBase: true
      },
      configData: [
        {
          name: '我的配置-1',
          id: 'rfgdg'
        }
      ] as List[]
    }
  },
  getters: {},
  actions: {
    resetFormData() {
      this.formData = {
        name: '',
        paihao: '1/2',
        tiaoshi: '',
        zhuyin: '1/4',
        yinyu: ['', ''],
        config: [
          {
            size: 0,
            weak: '是'
          }
        ],
        base: [] as string[],
        tongyinlianxian: '',
        createBase: true
      }
    },
    // 新建配置
    createConfig() {
      this.resetFormData()
      this.currId = ''
    },
    // 删除配置
    delConfig() {
      this.configData = this.configData.filter((k) => k.id !== this.currId)
    },
    submit() {
      if (this.currId) {
        // 更新
      } else {
        // 创建
        this.configData.push({
          name: this.formData.name,
          id: (Math.random() * 100000).toString()
        })
      }
    }
  }
})

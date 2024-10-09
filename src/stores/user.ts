import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import avatar from '@/assets/images/Ellipse.png'

interface User {
  name: string
  avatar: string
}

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const localUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : void 0
  const user = ref<User | undefined>(localUser)
  const isLogin = computed(() => !!user.value)
  function login() {
    user.value = {
      name: '披荆斩折',
      avatar: avatar
    }
    localStorage.setItem('user', JSON.stringify(user.value))
  }
  function logout() {
    user.value = void 0
    localStorage.removeItem('user')
    router.replace('/')
  }
  return { isLogin, user, login, logout }
})

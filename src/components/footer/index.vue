<template>
  <div>
    <!-- 分享 -->
    <div class="flex justify-center gap-14 py-16 text-base text-black">
      <div class="flex items-center">
        <img src="@/assets/images/douyin.svg" alt="" class="mr-2" />
        抖音：@flomuse
      </div>
      <div class="flex items-center">
        <img src="@/assets/images/weixin.svg" alt="" class="mr-2" />
        公众号：复音flomuse
      </div>
      <div class="flex items-center">
        <img src="@/assets/images/email.svg" alt="" class="mr-2" />
        邮箱: general@flomuse.com
      </div>
    </div>

    <!-- 链接 -->
    <div class="text-base mb-11 text-center *:color-hui *:px-2 text-[#7F8490]">
      <RouterLink to="?id=about">关于我们</RouterLink>
      <span>|</span>
      <RouterLink to="/documents/user-agreement">服务条款</RouterLink>
      <span>|</span>
      <RouterLink to="/documents/privacy-agreement">隐私政策</RouterLink>
      <span>|</span>
      <RouterLink to="/documents/help">帮助中心</RouterLink>
    </div>

    <!-- copyright -->
    <div class="text-xs py-4 text-center *:color-hui *:px-6 border-t text-[#7F8490]">
      <span>备案号: 京ICP备2024072531号</span>

      <span>© 2024 FloMuse. All rights reserved.</span>
    </div>
  </div>
</template>

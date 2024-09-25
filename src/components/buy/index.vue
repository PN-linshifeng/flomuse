<script lang="ts" setup>
import { ref } from 'vue'
const active = ref('b')
</script>
<template>
  <div
    class="absolute left-0 right-0 top-0 w-[100vw] h-[100vh] overflow-hidden flex items-center justify-center"
  >
    <div
      class="w-[1200px] rounded-[30px] shadow bg-theme overflow-hidden"
      style="background: linear-gradient(to bottom, #e1efc7, #818972)"
    >
      <header class="h-[100px] relative">
        <div class="absolute left-[30px] top-[30px] flex">
          <div class="mr-2">
            <img
              src="@/assets/images/Ellipse.png"
              alt=""
              srcset=""
              class="w-[60px] h-[60px] border-2 border-white rounded-full"
            />
          </div>
          <div>
            <p class="text-black text-[20px]">AlanTsang</p>
            <p>
              <span
                class="inline-block text-xs bg-black rounded-md px-2 py-1 text-white leading-none skew-x-[-10deg]"
              >
                <span class="inline-block skew-x-[10deg]">普通会员</span>
              </span>
            </p>
          </div>
        </div>
        <div class="text-center text-3xl leading-[100px] text-black">请选择您的付费方式</div>
      </header>
      <div class="h-[90px] leading-[90px] relative">
        <div class="w-full h-[80px] absolute top-[10px] bg-[#B1DCCC] rounded-t-[30px]"></div>
        <div class="flex text-[#06452E] *:flex-1 *:relative *:z-10 *:text-center">
          <div class="" :class="active === 'a' ? 'active' : ''" @click="active = 'a'">
            <div class="text-2xl leading-[90px] cursor-pointer">订阅制会员</div>
            <div class="left">
              <div class="tabs"></div>
            </div>
            <div class="right">
              <div class="tabs"></div>
            </div>
          </div>
          <div :class="active === 'b' ? 'active' : ''" @click="active = 'b'">
            <div class="text-2xl leading-[90px] cursor-pointer">贝壳充值</div>
            <div class="left">
              <div class="tabs"></div>
            </div>
            <div class="right">
              <div class="tabs"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white pb-6 pt-[70px] px-12">
        <!-- 订阅制会员 -->
        <div class="flex">
          <div>
            <div class="text-[22px] mb-5"><span class="text-yellow">订购权益</span>包括：</div>
            <div class="text-base *:flex *:items-center *:mb-8">
              <div class="">
                <img src="@/assets/images/Check.svg" alt="" srcset="" class="mr-3" />
                无限 AI 视唱模型生成次数
              </div>
              <div class="">
                <img src="@/assets/images/Check.svg" alt="" srcset="" class="mr-3" />
                无限乐谱云存储空间
              </div>
              <div class="">
                <img src="@/assets/images/Check.svg" alt="" srcset="" class="mr-3" />
                专业版高自由度定制视唱旋律生成
              </div>
              <div class="">
                <img src="@/assets/images/Check.svg" alt="" srcset="" class="mr-3" />
                多种音基训练模式
              </div>
              <div class="">
                <img src="@/assets/images/Check.svg" alt="" srcset="" class="mr-3" />
                优先体验新产品和功能
              </div>
            </div>
          </div>
          <div class="flex-1">
            <div
              class="flex gap-7 text-base text-center text-black *:flex-1 *:flex *:justify-center *:flex-col *:border *:rounded-xl *:h-[174px]"
            >
              <div class="*:my-2">
                <div>季度会员</div>
                <div>
                  <del>¥108/<span class="text-hui">月</span></del>
                </div>
                <div>
                  <span class="px-8 py-2 rounded-full text-[20px] bg-[#F5F5F5] inline-block"
                    >限时免费</span
                  >
                </div>
              </div>
              <div class="*:my-2">
                <div>季度会员</div>
                <div>
                  <del>
                    ¥236/<span class="text-hui">季</span> (¥78.5/<span class="text-hui">月</span>)
                  </del>
                </div>
                <div>
                  <span class="px-8 py-2 rounded-full text-[20px] bg-[#F5F5F5] inline-block"
                    >限时免费</span
                  >
                </div>
              </div>
              <div class="*:my-2">
                <div>年度会员</div>
                <div>
                  <del>
                    848/<span class="text-hui">季</span> (¥76.5/<span class="text-hui">月</span>)
                  </del>
                </div>
                <div>
                  <span class="px-8 py-2 rounded-full text-[20px] bg-[#F5F5F5] inline-block"
                    >限时免费</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.active {
  background: #fff;
  border-radius: 30px 30px 0 0;
  color: #000;
  .tabs {
    @w: 90px;
    @h: 90px;
    position: absolute;
    width: @w;
    height: 90px;
    top: 0px;
    right: 0px;
    border-radius: 0 20px 0 0;
    background: #fff;
    transform: skewX(20deg) translateX(0px);
    transform-origin: left top;
    &::before {
      display: block;
      position: absolute;
      content: '';
      width: @w;
      height: 30px;
      bottom: 0;
      right: 0;
      background: #fff;
      transform: skewX(0deg) translateX(50%);
    }
    &::after {
      @w: 45px;
      @h: 90px;
      content: '';
      position: absolute;
      width: @w;
      height: 30px;
      bottom: 0px;
      right: 0px;
      border-radius: 0 00px 0 20px;
      background: #b1dccc;
      transform: skewX(0deg) translateX(100%);
      transform-origin: bottom right;
    }
  }
  .left {
    position: absolute;
    top: 0;
    transform: rotateY(180deg);
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
  }
  &:first-child {
    .left {
      display: none;
    }
  }
  &:last-child {
    .right {
      display: none;
    }
  }
}
</style>

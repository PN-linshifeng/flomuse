<script lang="ts" setup>
import { ref } from 'vue'
import type { BuyType } from '@/types'
import PayCode from './code.vue'
const props = defineProps<{ buyType?: BuyType }>()
const active = ref(props.buyType)
const select = ref<'月' | '季' | '年'>('季')
const beihe = ref<10 | 110 | 1100 | 11100>(1100)
</script>
<template>
  <div class="overflow-hidden flex items-center justify-center py-8">
    <div
      class="w-[1200px] rounded-[30px] bg-theme overflow-hidden shadow-[0_0px_30px_0px_rgba(0,0,0,0.3)]"
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
      <div class="h-[90px] leading-[90px] relative overflow-hidden">
        <div class="w-full h-[80px] absolute top-[10px] bg-[#B1DCCC] rounded-t-[30px]"></div>
        <div class="flex text-[#06452E] *:flex-1 *:relative *:z-10 *:text-center">
          <div
            class=""
            :class="active === '订阅制会员' ? 'active' : ''"
            @click="active = '订阅制会员'"
          >
            <div class="text-2xl leading-[100px] cursor-pointer">订阅制会员</div>
            <div class="left">
              <div class="tabs"></div>
            </div>
            <div class="right">
              <div class="tabs"></div>
            </div>
          </div>
          <div :class="active === '贝壳充值' ? 'active' : ''" @click="active = '贝壳充值'">
            <div class="text-2xl leading-[100px] cursor-pointer">贝壳充值</div>
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
        <div class="flex" v-show="active === '订阅制会员'" key="a">
          <div class="mr-16 w-[300px]">
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
              class="flex gap-7 mb-8 text-base text-center text-black *:flex-1 *:flex *:justify-center *:flex-col *:border *:rounded-xl *:h-[174px] *:cursor-pointer *:relative"
            >
              <div
                class="*:my-2"
                :class="select === '月' ? ' border-yellow bg-[#FEF9F8]' : ''"
                @click="select = '月'"
              >
                <div
                  v-show="select === '月'"
                  class="text-white !m-0 absolute left-[-1px] top-[-1px] translate-y-[-50%] h-8 w-[45%] rounded-full rounded-bl-[0px] text-sm leading-8 bg-gradient-to-r from-yellow to-[#FE8E3D]"
                >
                  最多选择
                </div>
                <div>季度会员</div>
                <div>
                  <del>¥108/<span class="text-hui">月</span></del>
                </div>
                <div>
                  <span
                    class="px-8 py-2 rounded-full text-[20px] bg-[#F5F5F5] inline-block"
                    :class="select === '月' ? ' text-yellow bg-[#FFE2DC]' : ''"
                    >限时免费</span
                  >
                </div>
              </div>

              <div
                class="*:my-2"
                :class="select === '季' ? ' border-yellow bg-[#FEF9F8]' : ''"
                @click="select = '季'"
              >
                <div
                  v-show="select === '季'"
                  class="text-white !m-0 absolute left-[-1px] top-[-1px] translate-y-[-50%] h-8 w-[45%] rounded-full rounded-bl-[0px] text-sm leading-8 bg-gradient-to-r from-yellow to-[#FE8E3D]"
                >
                  最多选择
                </div>
                <div>季度会员</div>
                <div>
                  <del>
                    ¥236/<span class="text-hui">季</span> (¥78.5/<span class="text-hui">月</span>)
                  </del>
                </div>
                <div>
                  <span
                    class="px-8 py-2 rounded-full text-[20px] bg-[#F5F5F5] inline-block"
                    :class="select === '季' ? ' text-yellow bg-[#FFE2DC]' : ''"
                    >限时免费</span
                  >
                </div>
              </div>
              <div
                class="*:my-2"
                :class="select === '年' ? ' border-yellow bg-[#FEF9F8]' : ''"
                @click="select = '年'"
              >
                <div
                  v-show="select === '年'"
                  class="text-white !m-0 absolute left-[-1px] top-[-1px] translate-y-[-50%] h-8 w-[45%] rounded-full rounded-bl-[0px] text-sm leading-8 bg-gradient-to-r from-yellow to-[#FE8E3D]"
                >
                  最多选择
                </div>
                <div>年度会员</div>
                <div>
                  <del>
                    848/<span class="text-hui">季</span> (¥76.5/<span class="text-hui">月</span>)
                  </del>
                </div>
                <div>
                  <span
                    class="px-8 py-2 rounded-full text-[20px] bg-[#F5F5F5] inline-block"
                    :class="select === '年' ? ' text-yellow bg-[#FFE2DC]' : ''"
                    >限时免费</span
                  >
                </div>
              </div>
            </div>
            <!-- 二维码 -->
            <!-- <div class="px-4 py-7 text-center bg-[#F5F5F5] mt-8 rounded-[32px] text-base">
              <div class="mb-7">应付金额：<span class="text-yellow">0</span> 元</div>
              <div class="flex justify-center px-20 *:flex-1">
                <div>
                  <div class="flex justify-center">
                    <div class="border border-[#48B338] p-2 mb-4 w-[120px] h-[120px] rounded-xl">
                      <img src="@/assets/images/code.png" alt="" srcset="" />
                    </div>
                  </div>
                  <div class="flex items-center w-full justify-center">
                    <img
                      src="@/assets/images/wxp.png"
                      class="size-5 mr-2"
                      alt=""
                      srcset=""
                    />微信支付
                  </div>
                </div>
                <div>
                  <div class="flex justify-center">
                    <div class="border border-[#2EA7E0] p-2 mb-4 w-[120px] h-[120px] rounded-xl">
                      <img src="@/assets/images/code.png" alt="" srcset="" />
                    </div>
                  </div>
                  <div class="flex items-center w-full justify-center">
                    <img
                      src="@/assets/images/zyp.png"
                      class="size-5 mr-2"
                      alt=""
                      srcset=""
                    />微信支付
                  </div>
                </div>
              </div>
              <div class="mt-10">
                支付即视为同意并阅读<a href="#" class="text-black">《会员服务协议》</a>和<a
                  href="#"
                  class="text-black"
                  >《会员详细规则》</a
                >
              </div>
            </div> -->
            <PayCode></PayCode>
          </div>
        </div>
        <!-- 贝壳充值 -->
        <div class="relative" v-show="active === '贝壳充值'" key="b">
          <div class="absolute translate-y-[-200%] text-lg mb-10">
            灵活充值，按需购买，让您的每一笔花费都物有所值
          </div>
          <div
            class="flex gap-7 text-base text-center text-black *:flex-1 *:flex *:justify-center *:flex-col *:border *:rounded-xl *:h-[174px] *:cursor-pointer *:relative *:p-6"
          >
            <div
              class="*:my-2"
              :class="beihe === 10 ? ' border-yellow bg-[#FEF9F8]' : ''"
              @click="beihe = 10"
            >
              <div
                v-show="beihe === 10"
                class="text-white !m-0 absolute left-[-1px] top-[-1px] translate-y-[-50%] h-8 w-[45%] rounded-full rounded-bl-[0px] text-sm leading-8 bg-gradient-to-r from-yellow to-[#FE8E3D]"
              >
                最多选择
              </div>
              <div>10虚拟币包</div>
              <div class="text-2xl font-[600]">¥1.1</div>
              <div>
                <span
                  class="w-full px-1 py-2 rounded-full text-sm bg-[#F5F5F5] inline-block"
                  :class="beihe === 10 ? ' text-yellow bg-[#FFE2DC]' : ''"
                  >每日首次购买0.3折 0.33元</span
                >
              </div>
            </div>

            <div
              class="*:my-2"
              :class="beihe === 110 ? ' border-yellow bg-[#FEF9F8]' : ''"
              @click="beihe = 110"
            >
              <div
                v-show="beihe === 110"
                class="text-white !m-0 absolute left-[-1px] top-[-1px] translate-y-[-50%] h-8 w-[45%] rounded-full rounded-bl-[0px] text-sm leading-8 bg-gradient-to-r from-yellow to-[#FE8E3D]"
              >
                最多选择
              </div>
              <div>110虚拟币包</div>
              <div class="text-2xl font-[600]">¥9.9</div>
              <div>
                <span
                  class="w-full px-1 py-2 rounded-full text-sm bg-[#F5F5F5] inline-block"
                  :class="beihe === 110 ? ' text-yellow bg-[#FFE2DC]' : ''"
                  >10%OFF</span
                >
              </div>
            </div>
            <div
              class="*:my-2"
              :class="beihe === 1100 ? ' border-yellow bg-[#FEF9F8]' : ''"
              @click="beihe = 1100"
            >
              <div
                v-show="beihe === 1100"
                class="text-white !m-0 absolute left-[-1px] top-[-1px] translate-y-[-50%] h-8 w-[45%] rounded-full rounded-bl-[0px] text-sm leading-8 bg-gradient-to-r from-yellow to-[#FE8E3D]"
              >
                最多选择
              </div>
              <div>1100虚拟币包</div>
              <div class="text-2xl font-[600]">¥89</div>
              <div>
                <span
                  class="w-full px-1 py-2 rounded-full text-sm bg-[#F5F5F5] inline-block"
                  :class="beihe === 1100 ? ' text-yellow bg-[#FFE2DC]' : ''"
                  >20%OFF</span
                >
              </div>
            </div>
            <div
              class="*:my-2"
              :class="beihe === 11100 ? ' border-yellow bg-[#FEF9F8]' : ''"
              @click="beihe = 11100"
            >
              <div
                v-show="beihe === 11100"
                class="text-white !m-0 absolute left-[-1px] top-[-1px] translate-y-[-50%] h-8 w-[45%] rounded-full rounded-bl-[0px] text-sm leading-8 bg-gradient-to-r from-yellow to-[#FE8E3D]"
              >
                最多选择
              </div>
              <div>11100虚拟币包</div>
              <div class="text-2xl font-[600]">¥848</div>
              <div>
                <span
                  class="w-full px-1 py-2 rounded-full text-sm bg-[#F5F5F5] inline-block"
                  :class="beihe === 11100 ? ' text-yellow bg-[#FFE2DC]' : ''"
                  >30%OFF</span
                >
              </div>
            </div>
          </div>
          <div class="flex mt-8">
            <div class="w-[300px] mr-16">
              <div class="text-[22px] mb-5"><span class="text-yellow">常见问题</span>解答：</div>
              <div class="text-base *:flex *:items-center *:mb-8">
                <div class="">贝壳是否有有效期？</div>
                <div class="">充值多久后贝壳可以到账？</div>
                <div class="">我可以在哪里看到我的购买记录？</div>
              </div>
            </div>
            <!-- 二维码 -->
            <PayCode></PayCode>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.active {
  @apply border;
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

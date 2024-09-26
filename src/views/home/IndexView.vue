<script lang="ts" setup>
import { ref } from 'vue'
import Buy from '@/components/buy/index.vue'
const visibleBuy = ref(true)
</script>
<template>
  <div>
    <!-- 导航 -->
    <div class="max-w-page w-full fixed left-[50%] translate-x-[-50%] top-10 px-4">
      <div
        class="h-[70px] border border-black bg-white w-full rounded-full flex items-center justify-center shadow-[4px_5px_0px_0px_#121212]"
      >
        <div
          class="text-[#c1c1c1] max-w-[1580px] h-[50px] p-[5px] leading-[40px] rounded-full bg-[#f1f1f1] flex text-center"
        >
          <span
            class="transition-all w-[135px] cursor-pointer rounded-full hover:bg-[#b1dccc] hover:text-black"
            >旋律生成</span
          >
          <span
            class="transition-all w-[135px] cursor-pointer rounded-full hover:bg-[#b1dccc] hover:text-black"
            >关于我们</span
          >
          <span
            class="transition-all w-[135px] cursor-pointer rounded-full hover:bg-[#b1dccc] hover:text-black"
            >服务介绍</span
          >
          <span
            class="transition-all w-[135px] cursor-pointer rounded-full hover:bg-[#b1dccc] hover:text-black"
            >订阅方案</span
          >
        </div>
      </div>
    </div>
    <!-- 旋律生成 -->
    <div
      class="w-full h-[100vh] flex items-center flex-col text-center justify-center bg-[#FEF8EF] bg-[url('@/assets/images/banner-bg.png')] bg-cover"
    >
      <div class="text-[32px] font-bold mb-[42px] text-theme leading-[60px]">
        “探索音乐的无限可能，一键生成属于您的个性化视唱旋律！” <br />
        AI旋律生成
      </div>
      <div>
        <a
          class="inline-block w-[434px] h-[42px] leading-[42px] bg-[#F56E0D] text-white cursor-pointer rounded-xl"
          >立即体验
        </a>
      </div>
    </div>

    <!-- 关于我们 -->
    <div class="max-w-page py-20 px-4 mx-auto">
      <div class="text-[40px] text-center mb-16 text-black">复音科技，智启音乐教育未来</div>
      <div class="leading-6 *:mb-4">
        <p class="mb-4">
          欢迎来到FloMuse，您的音乐教育创新伙伴。感谢您与我们一同探索音乐教育的无限可能。
        </p>

        <p>
          音乐不仅是学习的对象，它更是连接你我心灵的纽带，是我们共同的情感表达。FloMuse远不止是一个工具，我们将它打造成一个温暖的音乐教育社区，一个为教师和学生提供支持和资源的平台。我们致力于让音乐学习变得更加直观、互动和个性化，助力每个人在音乐的道路上自由探索，发现自我。在FloMuse，我们不仅提供音乐知识，我们更致力于培养音乐的未来。
        </p>

        <p>
          在这个瞬息万变的时代，音乐教育也在不断地进化。我们深知，为了满足您对提升音乐素养的渴望，我们需要提供更高效、更科学的学习方式和教学工具，因此，我们自豪地推出革命性的AI视唱生成模型——FlowMelody。我们倾心打造了FlowMelody，这款创新的AI视唱生成模型，它不仅是技术的结晶，更是我们对音乐教育热爱的体现。我们致力于通过它激发您内在的创造力，同时提升您的学习或教学效率，让音乐学习之旅更加丰富和愉悦。音乐不仅仅是一种艺术形式，它还是一种一种能够跨越文化和国界沟通的语言。我们作为一个由音乐专业人士组成的团队，深知音乐的力量能够启迪心灵，丰富生活，FlowMelody是我们将这种力量带入每个教室和家庭的桥梁。
        </p>

        <p>
          启用FloMuse，让FloMuse成为您音乐教学旅程中的得力助手，无论是在传统的音乐课堂，还是在家庭的音乐教育中，我们都能提供定制化的解决方案，帮助学生根据自己的节奏和风格学习。我们相信，通过FloMuse，无论是作为业余爱好者还是未来的音乐家，每个学生都能发现并发展自己的音乐潜力。以个性化和智能化的视唱学习体验作为起点，我们邀请大家共同探索音乐的无限可能，让FloMuse成为您音乐旅程中的得力助手吧！
        </p>

        <p>立即体验FloMuse，让我们一起开启音乐教育新篇章。</p>
      </div>
      <div class="flex justify-between">
        <div class="w-[250px]">
          <div>
            <img src="@/assets/images/about-1.png" alt="" />
          </div>
          <div class="text-lg text-center mb-2 text-black">课堂教学辅助</div>
          <div class="leading-6 text-[#757070]">
            提高音乐教学效率，用AI视唱生成模型轻松生成个性化教学材料
          </div>
        </div>
        <div class="w-[250px]">
          <div>
            <img src="@/assets/images/about-2.png" alt="" />
          </div>
          <div class="text-lg text-center mb-2 text-black">个性化视唱练习</div>
          <div class="leading-6 text-[#757070]">
            AI生成个性化视唱练习方案，让你的每一次练习都精准高效
          </div>
        </div>
        <div class="w-[250px]">
          <div>
            <img src="@/assets/images/about-3.png" alt="" />
          </div>
          <div class="text-lg text-center mb-2 text-black">多种训练模式</div>
          <div class="leading-6 text-[#757070]">视唱、听写、节奏练习，多种训练模式随心切换</div>
        </div>
        <div class="w-[250px]">
          <div>
            <img src="@/assets/images/about-4.png" alt="" />
          </div>
          <div class="text-lg text-center mb-2 text-black">在线乐谱编辑器</div>
          <div class="leading-6 text-[#757070]">生成旋律在线即听即改，自由玩转音乐创作</div>
        </div>
      </div>
    </div>

    <!-- 服务介绍 -->
    <div class="w-full bg-[#FEF8EF]">
      <div class="max-w-page mx-auto py-10">
        <div class="text-[40px] text-center mb-16 text-black">复音科技，智启音乐教育未来</div>
        <div class="flex justify-between">
          <div class="w-[300px]">
            <div class="mb-14 text-center">
              <img src="@/assets/images/server-1.png" alt="" />
            </div>
            <div class="text-lg text-center mb-2 text-black">专属服务器</div>
            <div class="leading-6 text-[#757070]">
              我们可以为企业或机构提供专属服务器托管服务，确保您的数据安全和高效运行。这意味着您的机构可以在您控制的环境中部署我们的AI视唱生成模型FlowMelody和未来推出的其他软件，以满足您的特定性能和安全要求
            </div>
          </div>
          <div class="w-[300px]">
            <div class="mb-14 text-center">
              <img src="@/assets/images/server-2.png" alt="" />
            </div>
            <div class="text-lg text-center mb-2 text-black">专属模型定制</div>
            <div class="leading-6 text-[#757070]">
              我们提供一站式专属可控、私有化、垂直领域模型构建解决方案。我们可以对FlowMelody等模型进行微调，以适应您的特定教学或创作风格。这种定制化的服务可以帮助您实现更个性化的音乐教育体验或音乐制作流程，例如，通过分析特定的音乐风格或教学方法，模型可以被训练以更好地支持这些特定的需求。
            </div>
          </div>
          <div class="w-[300px]">
            <div class="mb-14 text-center">
              <img src="@/assets/images/server-3.png" alt="" />
            </div>
            <div class="text-lg text-center mb-2 text-black">其他定制服务</div>
            <div class="leading-6 text-[#757070]">
              除了专属服务器和微调模型，我们还提供一系列其他定制服务，包括但不限于音乐生成技术支持、音乐教育内容开发、以及与现有教育或音乐制作软件的无缝集成。我们的专家团队将与您紧密合作，确保我们的解决方案完全符合您的业务目标和用户需求。
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 订阅方案 -->
    <div class="w-full bg-[#cdede1] bg-[url('@/assets/images/footer-bg.png')] bg-cover py-[80px]">
      <div class="max-w-page mx-auto">
        <div class="text-[40px] text-center mb-16 text-black">订阅方案</div>
        <div
          class="flex *:transition-all hover:*:shadow-lg *:flex-1 gap-5 *:flex *:flex-col *:justify-between *:h-[500px] *:rounded-2xl *:bg-white *:pb-7"
        >
          <div class="group/item">
            <div>
              <div
                class="h-[72px] leading-[72px] group-hover/item:bg-[#E1EFC7] text-center text-xl mb-7 transition-all rounded-2xl text-black"
              >
                免费
              </div>
              <ul class="px-6">
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>每日10次免费生成</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>限量云存储空间</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>视唱训练模式</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>简约版定制生成</span>
                </li>
              </ul>
            </div>
            <div class="text-center">
              <div class="text-center text-xl text-black mb-2">免费</div>
              <p class="text-[#798196] mb-6">新手尝鲜</p>
              <a
                class="inline-block w-[150px] h-10 leading-10 rounded-full cursor-pointer text-white bg-theme group-hover/item:bg-yellow transition-all text-xs"
              >
                订阅此计划
              </a>
            </div>
          </div>
          <!-- 一个月 -->
          <div class="group/item">
            <div>
              <div
                class="h-[72px] leading-[72px] group-hover/item:bg-[#E1EFC7] text-center text-xl mb-7 transition-all rounded-2xl text-black"
              >
                1个月
              </div>
              <ul class="px-6">
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>无限生成次数</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>无限云存储空间</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>多种训练模式</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>专业版定制生成</span>
                </li>
              </ul>
            </div>
            <div class="text-center">
              <div class="text-center text-xl text-black mb-2">
                <del>¥108/<span class="text-hui">月</span></del>
              </div>
              <p class="text-theme mb-6">限时免费</p>
              <a
                class="inline-block w-[150px] h-10 leading-10 rounded-full bg-theme group-hover/item:bg-yellow transition-all cursor-pointer text-white text-xs"
              >
                订阅此计划
              </a>
            </div>
          </div>

          <!-- 3个月 -->
          <div class="group/item">
            <div>
              <div
                class="h-[72px] leading-[72px] group-hover/item:bg-[#E1EFC7] text-center text-xl mb-7 transition-all rounded-2xl text-black"
              >
                3个月(推荐)
              </div>
              <ul class="px-6">
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>无限生成次数</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>无限云存储空间</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>多种训练模式</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>专业版定制生成</span>
                </li>
              </ul>
            </div>
            <div class="text-center">
              <div class="text-center text-xl text-black mb-2">
                <del
                  >¥236/<span class="text-hui">季</span> (¥78.5/<span class="text-hui">月</span
                  >)</del
                >
              </div>
              <p class="text-theme mb-6">限时免费</p>
              <a
                class="inline-block w-[150px] h-10 leading-10 rounded-full bg-theme group-hover/item:bg-yellow transition-all cursor-pointer text-white text-xs"
              >
                订阅此计划
              </a>
            </div>
          </div>

          <!-- 12个月 -->
          <div class="group/item">
            <div>
              <div
                class="h-[72px] leading-[72px] group-hover/item:bg-[#E1EFC7] text-center text-xl mb-7 transition-all rounded-2xl text-black"
              >
                12个月
              </div>
              <ul class="px-6">
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>生成速度提升</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>无限生成次数</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>无限云存储空间</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>多种训练模式</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>专业版定制生成</span>
                </li>
              </ul>
            </div>
            <div class="text-center">
              <div class="text-center text-xl text-black mb-2">
                <del
                  >¥848/<span class="text-hui">年</span> (¥70.6/<span class="text-hui">月</span
                  >)</del
                >
              </div>
              <p class="text-theme mb-6">限时免费</p>
              <a
                class="inline-block w-[150px] h-10 leading-10 rounded-full bg-theme group-hover/item:bg-yellow transition-all cursor-pointer text-white text-xs"
              >
                订阅此计划
              </a>
            </div>
          </div>

          <!-- 企业订阅 -->
          <div class="group/item">
            <div>
              <div
                class="h-[72px] leading-[72px] group-hover/item:bg-[#E1EFC7] text-center text-xl mb-7 transition-all rounded-2xl text-black"
              >
                企业订阅
              </div>
              <ul class="px-6">
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>专属服务器</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>定制微调模型</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>无限生成次数</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>无限云存储空间</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>多种训练模式</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>专业版定制生成</span>
                </li>
                <li class="flex mb-5">
                  <img
                    class="mr-3 w-[19px] h-[18px]"
                    src="@/assets/images/Check.svg"
                    alt=""
                    srcset=""
                  />
                  <span>24小时专属客服</span>
                </li>
              </ul>
            </div>
            <div class="flex justify-center text-center">
              <a
                class="flex flex-col items-center justify-center w-[150px] h-10 text-[12px] rounded-full bg-theme group-hover/item:bg-yellow transition-all ursor-pointer text-white"
              >
                <span><img src="@/assets/images/Vector.svg" class="inline" /> 咨询客服</span>
                <span>获取专属优惠方案</span>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-20 flex">
          <div class="w-[306px] mr-16 text-black">
            <div class="text-2xl font-bold mb-8">为什么选择 FloMuse？</div>
            <p class="text-base">
              我们致力于提供最优质的音乐教育服务。 我们的AI技术让您的学习体验更加个性化。
              我们的价格透明，提供灵活的付费选项。
            </p>
          </div>
          <div class="mr-16 text-black text-center">
            <div class="text-2xl font-bold mb-3">账户余额</div>
            <p class="text-yellow text-2xl font-bold mb-4">125.0</p>
            <p class="text-base">
              <a
                class="inline-block w-[150px] h-10 leading-10 rounded-full bg-theme group-hover/item:bg-yellow transition-all cursor-pointer text-white text-xs"
              >
                充值虚拟币
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

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
    <div class="text-base mb-11 text-center *:color-hui *:px-2">
      <a href="">关于我们</a>
      <span>|</span>
      <a href="">服务条款</a>
      <span>|</span>
      <a href="">隐私政策</a>
      <span>|</span>
      <a href="">帮助中心</a>
    </div>

    <!-- copyright -->
    <div class="text-xs py-4 text-center *:color-hui *:px-6 border-t">
      <span>备案号: 京ICP备2024072531号</span>

      <span>© 2024 FloMuse. All rights reserved.</span>
    </div>
    <Buy v-if="visibleBuy"></Buy>
  </div>
</template>

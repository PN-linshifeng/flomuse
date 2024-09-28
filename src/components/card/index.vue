<script lang="ts" setup>
defineProps<{ title: string }>()
</script>
<template>
  <div class="flex flex-col bg-green rounded-2xl">
    <div class="h-7 leading-6 text-base overflow mb-[-1px]">
      <div class="active inline-block border-l border-t border-black bg-white px-6">
        <div class="leading-7 font-bold">{{ title }}</div>

        <div class="right">
          <div class="tabs"></div>
        </div>
      </div>
    </div>
    <div
      class="max-h-[calc(100%-27px)] border border-black rounded-tr-xl rounded-b-xl overflow-hidden bg-white"
    >
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.active {
  @apply rounded-t-xl relative;

  .tabs {
    @w: 28px;
    @h: 28px;
    @apply border-t border-r border-black;
    position: absolute;
    width: @w;
    height: @h;
    top: -1px;
    right: 0px;
    border-radius: 0 10px 0 0;
    background: #fff;
    transform: skewX(20deg) translateX(0px);
    transform-origin: left top;

    &::before {
      display: block;
      position: absolute;
      content: '';
      width: @w;
      height: 10px;
      bottom: 0;
      right: 0;

      background: #fff;
      transform: skewX(0deg) translateX(50%);
    }

    &::after {
      @apply border-l border-b border-black;

      content: '';
      position: absolute;
      width: @w;
      height: 15px;
      bottom: 0px;
      right: 0px;
      border-radius: 0 00px 0 10px;
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
      // display: none;
    }
  }

  &:last-child {
    .right {
      // display: none;
    }
  }
}
</style>

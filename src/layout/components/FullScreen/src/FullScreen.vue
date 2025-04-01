<script setup>
import {useFullscreen} from "@vueuse/core";
import {Icon} from "@/components/Icon/index.js";

const {toggle, isFullscreen} = useFullscreen();

const tooltipTitle = computed(() => {
  return `点击切换${isFullscreen.value ? "退出" : "切换"}全屏模式`;
});
</script>

<template>
  <a-tooltip :title="tooltipTitle">
    <a-button shape="circle" @click="toggle">
      <template #icon>
        <Icon v-if="isFullscreen" name="off-screen" size="1em"/>
        <Icon v-else name="full-screen" size="1em"/>
      </template>
    </a-button>
  </a-tooltip>
</template>
<script setup>
import {IconPark} from "@icon-park/vue-next/lib/all.js";

defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: "1.2em",
  },
  color: {
    type: String,
    default: "currentColor",
  },
});
</script>

<template>
  <!-- 添加的两个className是为了适配 antd 原生的图标样式 -->
  <IconPark :type="name" :size="size" class="anticon anticon-pie-chart" :fill="color"/>
</template>
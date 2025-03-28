<script setup>
import {IconPark} from "@icon-park/vue-next/es/all.js";

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!-- 添加的两个className是为了适配 antd 原生的图标样式 -->
  <IconPark :type="name" class="anticon anticon-pie-chart" style="vertical-align: -2px"/>
</template>
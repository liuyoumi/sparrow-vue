<script setup>
import {Breadcrumb} from "@/layout/components/Breadcrumb/index.js";
import {FullScreen} from "@/layout/components/FullScreen/index.js";
import Avatar from "@/layout/components/Avatar/src/Avatar.vue";
import {Collapse} from "@/layout/components/Collapse/index.js";
</script>

<template>
  <a-layout-header class="flex items-center justify-between h-[var(--header-height)]! bg-white! p-0!">
    <div class="flex items-center h-full">
      <Collapse/>
      <Breadcrumb/>
    </div>
    <div class="flex items-center h-full">
      <FullScreen class="mr-2"/>
      <Avatar/>
    </div>
  </a-layout-header>
</template>
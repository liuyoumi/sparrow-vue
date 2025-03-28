<script setup>
import {Sider} from "./components/Sider/index.js";
import {Header} from "./components/Header/index.js";
</script>

<template>
  <a-layout class="min-h-full">
    <Sider/>
    <a-layout>
      <Header/>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="text-center text-[#a8abb2]!">
        Sparrow-Vue ©2025 Created by liuyoumi
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
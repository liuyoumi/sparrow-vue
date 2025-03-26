<script setup>
import {Menu} from "./components/Menu/index.js";
</script>

<template>
  <a-layout class="min-h-full">
    <Menu/>
    <a-layout>
      <a-layout-header class="bg-white!">
      </a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>

</style>
<script setup>
import {useUserStore} from "@/store/modules/user.js";

const userStore = useUserStore();
</script>

<template>
  <div class="block-hover">
    <a-avatar class="bg-primary">
      A
    </a-avatar>
    <span class="pl-2">{{ userStore.name }}</span>
  </div>
</template>
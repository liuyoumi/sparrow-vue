<script setup>
import {Icon} from "@/components/Icon/index.js";
import {useAppStore} from "@/store/modules/app.js";

const appStore = useAppStore();

const collapsed = computed(() => appStore.collapsed);
const toggleCollapse = () => {
  appStore.collapsed = !collapsed.value;
};
</script>

<template>
  <div class="block-hover" @click="toggleCollapse">
    <Icon v-if="collapsed" name="menu-fold-one" :size="18"/>
    <Icon v-else name="menu-unfold-one" :size="18"/>
  </div>
</template>
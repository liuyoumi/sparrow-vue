<script setup>
import Layout from "@/layout/Layout.vue";
import {useAppStore} from "@/store/modules/app.js";

const route = useRoute();
const appStore = useAppStore();
const theme = reactive({
  token: {
    colorPrimary: appStore.theme.colorPrimary,
    borderRadius: 0,
  },
});
</script>

<template>
  <a-config-provider :theme="theme">
    <template v-if="route.meta.visible">
      <Layout/>
    </template>
    <template v-else>
      <router-view/>
    </template>
  </a-config-provider>
</template>

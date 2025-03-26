<script setup>
import * as iconMap from "@ant-design/icons-vue";
import {useUserStore} from "@/store/modules/user.js";

const collapsed = ref(false);

/** 根据用户路由动态递归生成菜单项 */
const userStore = useUserStore();
const menuItems = computed(() => {
  return generateMenuItems(userStore.routes);
});
const generateMenuItems = (routes) => {
  return routes.filter(item => item.meta.visible).map(item => {
    const data = {
      key: item.path,
      icon: () => h(iconMap[item.meta.icon]),
      label: item.meta.title,
      title: item.meta.title,
    };
    if (item.children) {
      data.children = generateMenuItems(item.children);
    }
    return data;
  });
};

/** 点击菜单项进行跳转 */
const router = useRouter();
const onItemClick = (item) => {
  router.push({path: item.keyPath.join("/")});
};
</script>

<template>
  <a-layout-sider v-model:collapsed="collapsed" theme="dark" collapsible>
    <a-menu mode="inline" theme="dark" :items="menuItems" @click="onItemClick"/>
  </a-layout-sider>
</template>
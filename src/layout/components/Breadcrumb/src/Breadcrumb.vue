<script setup>
const route = useRoute();
const breadcrumbItems = computed(() => {
  return route.matched.filter(item => item.meta.breadcrumb).map(item => ({
    path: item.path,
    icon: item.meta.icon,
    name: item.meta.title,
  }));
});
</script>

<template>
  <a-breadcrumb>
    <transition-group appear enter-active-class="animate__animated animate__fadeInRight">
      <template v-for="item of breadcrumbItems" :key="item.path">
        <a-breadcrumb-item>{{ item.name }}</a-breadcrumb-item>
      </template>
    </transition-group>
  </a-breadcrumb>
</template>
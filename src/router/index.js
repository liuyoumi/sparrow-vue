import {createRouter, createWebHistory} from "vue-router";

export const baseRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页",
      visible: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      visible: false,
    },
  },
  {
    path: "/404",
    name: "Not Found",
    component: () => import("@/views/error/404.vue"),
    meta: {
      title: "Not Found",
      visible: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: baseRoutes,
  scrollBehavior: () => ({left: 0, top: 0}),
});

export default router;
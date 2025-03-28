import {createRouter, createWebHistory} from "vue-router";
import {setupGuard} from "@/router/guard.js";
import {baseRoutes} from "@/router/routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: baseRoutes,
  scrollBehavior: () => ({left: 0, top: 0}),
});

setupGuard(router);

export default router;
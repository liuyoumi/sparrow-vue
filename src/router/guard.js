import router from "@/router/index.js";
import {getToken} from "@/utils/auth.js";
import {useUserStore} from "@/store/modules/user.js";
import {useRouteStore} from "@/store/modules/route.js";

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  /**
   * 1、有token
   *    - 已登录，直接next
   *    - 没登录或者页面刷新导致内存数据丢失，需要重新获取用户信息
   *    - 若用户访问白名单，直接重定向到首页
   * 2、没有token
   *    - 访问非白名单直接重定向到登录页
   */
  if (getToken() || 1) {
    // 如果走登录页则跳转到首页
    if (to.path === "/login") {
      next("/");
      return;
    }
    
    const userStore = useUserStore();
    const routeStore = useRouteStore();
    if (userStore.activated) {
      next();
      return;
    }
    
    // 没有则同步个人信息并添加路由
    await userStore.syncProfile();
    routeStore.generateRoutes(userStore.menus).forEach(route => {
      router.addRoute(route);
    });
    next({...to, replace: true});
    return;
  }
  
  if (whiteList.indexOf(to.path) === -1) {
    next(`/login?redirect=${to.fullPath}`);
  } else {
    next();
  }
});
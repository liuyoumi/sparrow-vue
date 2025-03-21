import router from "./router";
import {getToken} from "@/utils/auth.js";
import {useUserStore} from "@/store/modules/user.js";

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
  if (getToken()) {
    // 如果走登录页则跳转到首页
    if (to.path === "/login") {
      next("/");
      return;
    }
    
    // 判断登录用户是否已激活（获得数据），有则直接next无需执行其它
    const userStore = useUserStore();
    if (userStore.activated) {
      next();
      return;
    }
    
    // 没有则同步个人信息并添加路由
    await userStore.syncProfile();
    userStore.routes.forEach(route => {
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

router.afterEach((to) => {
  console.log("afterEach");
});
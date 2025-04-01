import {getToken} from "@/utils/auth.js";
import {useUserStore} from "@/store/modules/user.js";
import {useNProgress} from "@/hooks/useNProgress.js";

const whiteList = ["/login"];

const progress = useNProgress();

/**
 * @param {import("vue-router")} router
 */
export const setupGuard = (router) => {
  router.beforeEach(async (to, from, next) => {
    progress.start();
    if (getToken()) {
      if (to.path === "/login") {
        next("/");
        return;
      }
      
      const userStore = useUserStore();
      if (userStore.activated) {
        next();
        return;
      }
      
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
  
  router.afterEach(() => {
    progress.done();
  });
};


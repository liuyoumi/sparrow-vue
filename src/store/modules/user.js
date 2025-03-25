import {defineStore} from "pinia";
import storage, {CACHE_KEY} from "@/utils/storage.js";
import {AuthApi} from "@/api/auth/index.js";
import {generateRoutes} from "@/router/utils.js";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: 0,
    name: "",
    roles: [],
    perms: [],
    routes: [],
    activated: false,
  }),
  getters: {},
  actions: {
    async syncProfile() {
      let data = storage.get(CACHE_KEY.PROFILE);
      if (data == null) {
        data = await AuthApi.getProfile();
      }
      this.id = data.id;
      this.name = data.name;
      this.roles = data.roles;
      this.perms = data.perms;
      // 后端根据角色权限返回菜单列表，由前端处理菜单结构并转换成路由；
      this.routes = generateRoutes(data.menus);
      this.activated = true;
    },
  },
});
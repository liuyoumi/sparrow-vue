import {defineStore} from "pinia";
import _ from "lodash-es";
import {AuthApi} from "@/api/auth/index.js";
import {baseRoutes} from "@/router/index.js";
import {generateRoutes} from "@/router/utils.js";
import storage, {CACHE_KEY} from "@/utils/storage.js";

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
      this.routes = _.cloneDeep(baseRoutes).concat(generateRoutes(data.menus));
      this.activated = true;
    },
  },
});
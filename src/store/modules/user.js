import {AuthApi} from "@/api/auth/index.js";
import storage, {CACHE_KEY} from "@/utils/storage.js";
import {baseRoutes, ErrorRoutes, generateRoutes} from "@/router/routes.js";

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
      this.routes = _.cloneDeep(baseRoutes).concat(generateRoutes(data.menus), ErrorRoutes);
      this.activated = true;
    },
  },
});
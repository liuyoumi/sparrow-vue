import {list} from "../system/menu.js";

export default [
  {
    url: "/api/auth/profile",
    method: "get",
    timeout: 1000,
    response() {
      return {
        code: 0,
        msg: "OK",
        data: {
          id: 1,
          name: "牛肉干",
          roles: ["super_admin"],
          perms: ["*:*:*"],
          menus: list,
        },
      };
    },
  },
];
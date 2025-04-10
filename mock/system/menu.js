import {menuList} from "../data.js";

export default [
  {
    url: "/api/system/menu/list",
    method: "get",
    timeout: 1000,
    response() {
      return {
        code: 0,
        msg: "OK",
        data: {
          rows: menuList,
          count: menuList.length,
        },
      };
    },
  },
];
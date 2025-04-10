import request from "@/utils/request.js";

export const SystemMenuApi = {
  getList(params) {
    return request.get("/system/menu/list", {params});
  },
};
import request from "@/utils/request.js";

export const AuthApi = {
  getProfile() {
    return request.get("/auth/profile");
  },
};
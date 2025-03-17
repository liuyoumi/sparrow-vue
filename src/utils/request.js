import axios from "axios";

// 1、创建一个axios实例
const ins = axios.create({
  baseURL: process.env.VUE_APP_INSTANCE,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2、创建请求拦截器，设置token等信息
ins.interceptors.request.use((config) => {
  // 设置Token
  config.headers.Authorization = "Bearer " + localStorage.getItem("token");
  // do something...
  return config;
});

// 3、创建响应拦截器，处理响应等信息
ins.interceptors.response.use((response) => {
  /**
   * 规范响应数据格式，当code为0时，说明响应成功
   * {
   *   code:0,
   *   msg: "OK"
   *   data: <any>
   * }
   */
  const {code, data} = response.data;
  
  if (code === 0) {
    return data;
  }
  
  /**
   * 访问未授权的数据时，默认将code设置为401，遵循HTTP状态码
   * 提示用户错误信息，并清理内存状态，重定向到登录页面
   */
  if (code === 401) {
    return;
  }
  
  // 其他错误则直接提示错误信息
  alert("something went wrong");
  return Promise.reject("Something went wrong!");
}, (error) => {
  /** do something */
  return Promise.reject(error);
});

export default ins;
// UnoCSS
import "@/plugins/unocss";

// 全局样式
import "@/assets/styles/index.css";

// 动画样式
import "animate.css";

// 状态管理
import store from "@/store/index.js";

// 路由实例
import router from "@/router/index.js";

import {createApp} from "vue";
import App from "./App.vue";

// 路由权限
import "./permission.js";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");

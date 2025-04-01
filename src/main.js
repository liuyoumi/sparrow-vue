// 样式
import "@/assets/styles";

// 状态管理
import store from "@/store/index.js";

// 路由实例
import router from "@/router/index.js";

import {createApp} from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");

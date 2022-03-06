/*
 * @Author: liming
 * @Date: 2022-02-02 11:18:00
 * @LastEditTime: 2022-03-06 10:15:49
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");



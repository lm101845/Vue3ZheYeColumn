/*
 * @Author: liming
 * @Date: 2022-03-05 09:47:25
 * @LastEditTime: 2022-03-06 00:04:58
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\router.ts
 */
import { createRouter, createWebHistory } from "vue-router";
// import axios from "axios";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import ColumnDetail from "./views/ColumnDetail.vue";
import CreatePost from "./views/CreatePost.vue";
import PostDetail from "./views/PostDetail.vue";
import store from "./store";
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { redirectAlreadyLogin: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      meta: { redirectAlreadyLogin: true },
    },
    {
      path: "/create",
      name: "create",
      component: CreatePost,
      meta: { requiredLogin: true },
    },
    {
      path: "/column/:id",
      name: "column",
      component: ColumnDetail,
    },
    {
      path: "/posts/:id",
      name: "post",
      component: PostDetail,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: "login" });
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/');
  } else {
      next()
  }
});
export default router;

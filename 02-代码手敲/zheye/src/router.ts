/*
 * @Author: liming
 * @Date: 2022-03-05 09:47:25
 * @LastEditTime: 2022-03-06 00:04:58
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\router.ts
 */
/*
 * @Author: liming
 * @Date: 2022-02-04 13:14:13
 * @LastEditTime: 2022-03-05 09:48:45
 * @FilePath: \Vue3ZheYeColumn\01-课程资料\01-源码\zheye-master\zheye\src\router.ts
 */
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
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
  const { user, token } = store.state;
  const { requiredLogin, redirectAlreadyLogin } = to.meta;
  if (!user.isLogin) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      store
        .dispatch("fetchCurrentUser")
        .then(() => {
          if (redirectAlreadyLogin) {
            next("/");
          } else {
            next();
          }
        })
        .catch((e) => {
          console.error(e);
          store.commit("logout");
          next("login");
        });
    } else {
      if (requiredLogin) {
        next("login");
      } else {
        next();
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next("/");
    } else {
      next();
    }
  }
});

export default router;


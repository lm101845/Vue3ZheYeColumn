<!--
 * @Author: liming
 * @Date: 2021-09-08 22:34:06
 * @LastEditTime: 2022-02-20 20:54:46
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\App.vue
-->
<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="validateEmail"
        />
        <div class="form-text" v-if="emailRef.error">
          {{ emailRef.message }}
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <!-- <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button> -->
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
const currentUser: UserProps = {
  isLogin: true,
  name: "liming",
  id: 1
};

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "hello world",
    description: "这是一个测试数据"
    // avatar: "https://avatars0.githubusercontent.com/u/8186664?s=460&v=4"
  },
  {
    id: 2,
    title: "hello world2",
    description: "这是一个测试数据2",
    avatar: "https://avatars0.githubusercontent.com/u/8186664?s=460&v=4"
  },
  {
    id: 3,
    title: "hello world",
    description: "这是一个测试数据",
    avatar: "https://avatars0.githubusercontent.com/u/8186664?s=460&v=4"
  },
  {
    id: 4,
    title: "hello world2",
    description: "这是一个测试数据2",
    avatar: "https://avatars0.githubusercontent.com/u/8186664?s=460&v=4"
  }
];

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    const emailRef = reactive({
      val: "",
      error: false,
      message: ""
    });
    const validateEmail = () => {
      // 添加是否为空的逻辑
      if (emailRef.val.trim() === "") {
        emailRef.error = true;
        emailRef.message = "邮箱不能为空";
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true;
        emailRef.message = "邮箱格式不正确";
      }
    };
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail
    };
  }
});
</script>

<style></style>

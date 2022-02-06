<!--
 * @Author: liming
 * @Date: 2021-09-08 22:34:06
 * @LastEditTime: 2022-02-04 14:43:13
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\App.vue
-->
<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    };
  }
});
</script>

<style></style>

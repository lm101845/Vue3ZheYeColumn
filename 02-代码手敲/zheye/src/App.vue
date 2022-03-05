<!--
 * @Author: liming
 * @Date: 2021-09-08 22:34:06
 * @LastEditTime: 2022-03-05 15:52:17
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\App.vue
-->
<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <!-- <column-list :list="list"></column-list> -->
    <!-- <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        ></validate-input>
      </div>

      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          :rules="emailRules"
          v-model="passwordVal"
          placeholder="请输入密码"
          type="password"
        ></validate-input>
      </div>
            <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </validate-form> -->

    <!-- <div class="mb-3">
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
      </div> -->

    <!-- <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div> -->

    <!-- <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button> -->

    <!-- <template v-slot:submit> -->
    <!-- 具名插槽的缩写:#name -->

    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
// import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import { useStore } from "vuex";
// import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
// import ValidateForm from "./components/ValidateForm.vue";
// const currentUser: UserProps = {
//   isLogin: true,
//   name: "liming",
//   id: 1,
// };

// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: "hello world",
//     description: "这是一个测试数据",
//     // avatar: "https://avatars0.githubusercontent.com/u/8186664?s=460&v=4"
//   },
//   {
//     id: 2,
//     title: "hello world2",
//     description: "这是一个测试数据2",
//     avatar: "https://avatars0.githubusercontent.com/u/8186664?s=460&v=4",
//   },
//   {
//     id: 3,
//     title: "hello world",
//     description: "这是一个测试数据",
//     avatar: "https://avatars0.githubusercontent.com/u/8186664?s=460&v=4",
//   },
//   {
//     id: 4,
//     title: "hello world2",
//     description: "这是一个测试数据2",
//     avatar: "https://avatars0.githubusercontent.com/u/8186664?s=460&v=4",
//   },
// ];

// const emailReg =
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GlobalHeader,
    // ValidateInput,
    // ValidateForm,
  },
  setup() {
    // const inputRef = ref<any>();
    // const emailVal = ref("");
    // const passwordVal = ref("");
    // const emailRules: RulesProp = [
    //   { type: "required", message: "电子邮箱地址不能为空" },
    //   { type: "email", message: "请输入正确的电子邮件格式" },
    // ];

    // const emailRef = reactive({
    //   val: "",
    //   error: false,
    //   message: "",
    // });

    // const validateEmail = () => {
    //   // 添加是否为空的逻辑
    //   if (emailRef.val.trim() === "") {
    //     emailRef.error = true;
    //     emailRef.message = "邮箱不能为空";
    //   } else if (!emailReg.test(emailRef.val)) {
    //     emailRef.error = true;
    //     emailRef.message = "邮箱格式不正确";
    //   }
    // };

    // const onFormSubmit = (result: boolean) => {
    // //   console.log("result", result, inputRef.value.validateInput());
    // };
    const store = useStore();
    const currentUser = computed(() => {
        store.state.user
    });
    return {
      //   list: testData,
      currentUser,
      //   emailRef,
      //   validateEmail,
      //   emailRules,
      //   emailVal,
      //   passwordVal,
      //   onFormSubmit,
      //   inputRef,
    };
  },
});
</script>

<style></style>

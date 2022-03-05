<!--
 * @Author: liming
 * @Date: 2022-03-05 09:37:48
 * @LastEditTime: 2022-03-05 19:03:38
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\views\Home.vue
-->
<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
    <!-- <button
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25"
      @click="loadMorePage"
      v-if="!isLastPage"
    >
      加载更多
    </button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store";
import ColumnList from "../components/ColumnList.vue";
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
export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },

  setup() {
    const isLastPage = ref(false);
    const loadMorePage = () => {
      console.log("loadMorePage");
    };
    const store = useStore<GlobalDataProps>();
    const list = computed(() => {store.state.columns;});
    // const biggerColumnLen = computed(() => store.state.columns.filter(c=>c.id> 2).length);
    const biggerColumnLen = computed(() => store.getters.biggerColumnLen);
    return {
      //   list: testData,
      list,
      loadMorePage,
      biggerColumnLen
    };
  },
});
</script>

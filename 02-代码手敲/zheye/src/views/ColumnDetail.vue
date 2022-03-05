<!--
 * @Author: liming
 * @Date: 2022-03-05 09:44:47
 * @LastEditTime: 2022-03-05 19:17:05
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\views\ColumnDetail.vue
-->
<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar && column.avatar.fitUrl"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store";
// import { testData, testPosts } from "../testData";
import PostList from "../components/PostList.vue";
export default defineComponent({
  components: {
    PostList,
  },
  setup() {
    const route = useRoute();
    const store = useStore<GlobalDataProps>();
    const currentId = +route.params.id; //类型转换
    // const column = testData.find((c) => c.id === currentId);
    const column = computed(() =>
      store.getters.getColumnById(currentId)
    //   store.state.columns.find((c) => c.id === currentId)
    );
    // const list = testPosts.filter((p) => p.columnId === currentId);
    const list = computed(() =>
      store.getters.getPostsByCid(currentId)
    //   store.state.posts.filter((p) => p.columnId === currentId)
    );
    return {
      column,
      list,
    };
  },
});
</script>

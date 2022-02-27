<!--
 * @Author: liming
 * @Date: 2021-09-11 18:45:12
 * @LastEditTime: 2022-02-27 13:53:19
 * @FilePath: \zheye\src\components\ColumnList.vue
-->
<template>
  <div class="row">
    <!-- <div v-for="column in list" :key="column.id" class="col-4 mb-4"> -->
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      //如果你想把构造函数断言成一个类型，你可以这么写
      required: true,
    },
  },
  setup(props) {
    // props.list[0].title = "hello world";
    const columnList = computed(() => {
      //使用columnList来处理list的数据，如果没有图片地址，就使用默认的
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = require("@/assets/column.jpg");
        }
        return column;
      });
    });
    return { columnList };
  },
});
</script>

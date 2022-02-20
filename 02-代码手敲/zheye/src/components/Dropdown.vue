<!--
 * @Author: liming
 * @Date: 2022-02-04 15:06:39
 * @LastEditTime: 2022-02-20 20:36:15
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\components\Dropdown.vue
-->
<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
      >{{ title }}</a
    >
    <!-- 添加.prevent可以防止a链接的默认行为 -->
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <!-- <li class="dropdown-item">
        <a class="dropdown-item" href="#">新建文章</a>
      </li>
      <li class="dropdown-item">
        <a class="dropdown-item" href="#">编辑资料</a>
      </li> -->
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onUnmounted } from "vue";
// import { ref, defineComponent, watch } from "vue";
import useClickOutside from "../hooks/useClickOutside";

export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    // const isClickOutside = useClickOutside(dropdownRef);
    // //这个报错，那就不用把这个函数抽到外面去这个方法了

    // watch(isClickOutside, () => {
    //   if (isOpen.value && isClickOutside.value) {
    //     isOpen.value = false;
    //   }
    // });
    const handler = (e: MouseEvent) => {
      if (dropdownRef.value) {
        // console.log(dropdownRef.value);
        if (
          !dropdownRef.value.contains(e.target as HTMLElement) &&
          isOpen.value
        ) {
          isOpen.value = false;
        }
      }
    };
    onMounted(() => {
      document.addEventListener("click", handler);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handler);
    });
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    };
  }
});
</script>

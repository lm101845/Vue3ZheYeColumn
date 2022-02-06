<template>
  <div class="dropdown">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{
      title
    }}</a>
    <!-- 添加.prevent可以防止a链接的默认行为 -->
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <li class="dropdown-item">
        <a class="dropdown-item" href="#">新建文章</a>
      </li>
      <li class="dropdown-item">
        <a class="dropdown-item" href="#">编辑资料</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      isOpen,
      toggleOpen,
    };
  },
});
</script>

<!--
 * @Author: liming
 * @Date: 2022-02-27 22:47:24
 * @LastEditTime: 2022-02-27 22:57:59
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\components\ValidateForm.vue
-->
<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    const submitForm = () => {
      context.emit("form-submit", true);
    };
    return {
      submitForm,
    };
  },
});
</script>

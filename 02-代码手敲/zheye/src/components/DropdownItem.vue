<!--
 * @Author: liming
 * @Date: 2022-02-20 19:42:53
 * @LastEditTime: 2022-02-20 19:45:23
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\components\DropdownItem.vue
-->
<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>


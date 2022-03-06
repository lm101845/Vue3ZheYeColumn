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
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, Ref } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef: Ref<HTMLElement | null> = ref(null)
    const isClickOutside = useClickOutside(dropdownRef)
    const route = useRoute()
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false
      }
    })
    watch(route, () => {
      isOpen.value = false
    })
    return {
      isOpen,
      dropdownRef,
      toggleOpen
    }
  }
})
</script>

<style scoped></style>


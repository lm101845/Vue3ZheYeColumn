/*
 * @Author: liming
 * @Date: 2022-02-20 20:08:53
 * @LastEditTime: 2022-02-20 20:14:07
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\hooks\useClickOutside.ts
 */
import { ref, onMounted, onUnmounted, Ref } from "vue";

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener("click", handler);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });
  return isClickOutside;
};

export default useClickOutside;


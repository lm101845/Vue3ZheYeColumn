/*
 * @Author: liming
 * @Date: 2022-02-02 11:18:00
 * @LastEditTime: 2022-03-06 13:45:07
 * @FilePath: \02-代码手敲\zheye\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

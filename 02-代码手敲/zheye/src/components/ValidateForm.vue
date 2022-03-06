<!--
 * @Author: liming
 * @Date: 2022-02-27 22:47:24
 * @LastEditTime: 2022-02-28 22:58:43
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\components\ValidateForm.vue
-->
<template>
  <div class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean
export const emitter = mitt()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, { emit }) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const valid = funcArr.map((func) => func()).every((valid) => valid)
      emit('form-submit', valid)
    }
    const callback = (func: unknown) => {
      funcArr.push(func as ValidateFunc)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<!--
 * @Author: liming
 * @Date: 2022-02-22 23:01:38
 * @LastEditTime: 2022-02-27 14:52:10
 * @FilePath: \zheye\src\components\ValidateInput.vue
-->
<template>
  <div class="validate-input-container pb-3">
    <!-- <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.val"
      @blur="validateInput"
    /> -->
    <!-- <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
    /> -->
        <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  inheritAttrs:false,
  setup(props,context) {
      console.log(context.attrs,'context.attrs值');
      
    const inputRef = reactive({
      //   val: "",
      val: props.modelValue || "",
      error: false,
      message: "",
    });

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue);
    };

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
      }
    };

    return {
      inputRef,
      validateInput,
      updateValue
    };
  },
});
</script>

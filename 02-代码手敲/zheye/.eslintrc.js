/*
 * @Author: liming
 * @Date: 2021-09-08 22:34:06
 * @LastEditTime: 2021-09-08 23:07:29
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
      '@vue/typescript/recommended'
    // 它一共添加了3种规则来检查大家的Vue代码
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

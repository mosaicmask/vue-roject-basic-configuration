/** .eslintrc.js
 * 在VSCode中安装ESLint插件，编写过程中检测代码质量
 * ESLint 代码质量校验相关配置
 * 这里使用prettier作为代码格式化工具，用ESLint做代码质检
 * 相关配置使用下面extends扩展先做默认设置
 * 在.prettierrc.cjs文件中配置好后，格式化规则会以.prettierrc.cjs作为最终格式，所以不建议在本文件中做代码格式化相关配置
 * 相关prettier配置ESLint会默认加载为代码质检 格式化以prettier为主
 * 在本配置文件中只做代码质量约束规范配置
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended', // 使用推荐的eslint
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended', // 使用插件支持vue3
    'plugin:vue/vue3-essential',
    //1.继承.prettierrc.cjs文件规则  2.开启rules的 "prettier/prettier": "error"  3.eslint fix的同时执行prettier格式化
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: [],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['error', {allow: ['error', 'warn']}] : 'off', //生产模式不允许使用log
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //生产默认不允许使用debugger
    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off', // 需要函数和类方法的显式返回类型
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用该 any 类型
    '@typescript-eslint/no-var-requires': 'off', // 不允许使用 require 语句，除了在 import 语句中
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 在定义之前禁止使用变量
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用评论或在指令后要求描述
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/no-non-null-assertion': 'off', // '!'不允许使用后缀运算符的非空断言
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 需要导出函数和类的公共类方法的显式返回和参数类型
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ], // 变量声明未使用
    // vue
    'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
    'vue/attributes-order': 'off', // 强制执行属性顺序
    'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
    'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
    'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    'vue/require-default-prop': 'off', // 需要 props 的默认值
    "vue/html-indent": ["error", "tab"],  // 在<template>中强制一致缩进
    "indent": ["error", "tab"],            // 在<template>中强制一致缩进
    'vue/html-self-closing': 'off', // 执行自闭合的风格
    'vue/max-attributes-per-line': 'off', // 强制每行属性的最大数量
    'vue/multi-word-component-names': 'off', // 是否开启组件命名规则校验（强制多个单词以驼峰或'-'链接的命名规则）
    // ESLint
    'no-use-before-define': 'off', // 禁止在变量定义之前使用它们
    'space-before-function-paren': 'off' // 强制在 function的左括号之前使用一致的空格
    // '@typescript-eslint/no-var-requires': 'off', // 强制使用 import 且不允许使用 require 设置off关闭检查
    // 'vue/require-v-for-key': 'off', // 对保留元素检查 vue3中v-for会自动追加key值，所以不用再强制添加key属性，所以不检查key的填写
    // 'vue/valid-v-for': 'off', // 对于非保留(自定义)元素检查  vue3中v-for会自动追加key值，所以不用再强制添加key属性，所以不检查key的填写
  },
  overrides: [
    // 若要开启组件命名规则校验，建议选这种方式
    {
      files: ['src/views/index.vue', 'src/views/**/index.vue'], // 匹配 views 和任意多级路径中的 index.vue
      rules: {
        'vue/multi-word-component-names': 'off' // 给上面匹配的文件指定规则——关闭命名规则校验
      }
    }
  ]
};
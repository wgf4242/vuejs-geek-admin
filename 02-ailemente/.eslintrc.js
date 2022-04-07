module.exports = {
  // 设置我们的运行环境为浏览器 + es2021 + node ,否则eslint在遇到 Promise，window等全局对象时会报错
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 开启setup语法糖环境
    "vue/setup-compiler-macros": true,
  },
  // 继承eslint推荐的规则集，vue基本的规则集，typescript的规则集
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended"],
  parser: "vue-eslint-parser",
  // 支持ts的最新语法
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  // 添加vue和@typescript-eslint插件，增强eslint的能力
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    quotes: 2,
    semi: 0,
    "no-console": 0,

    "padding-line-between-statements": [
      // https://eslint.org/docs/rules/padding-line-between-statements
      "error",
      { blankLine: "always", prev: "*", next: "return" }, // return 前空行
      { blankLine: "always", prev: "function", next: "*" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" }, // 本行+下行 const/let/var 后添加空行
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },

      { blankLine: "always", prev: "directive", next: "*" }, // 连续 use strict 类的statement加空行
      { blankLine: "any", prev: "directive", next: "directive" },

      { blankLine: "always", prev: ["case", "default"], next: "*" },
    ],

    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/comment-directive": "off",
    "vue/padding-line-between-blocks": 1, // ["error", "always" | "never"]
    "vue/prefer-import-from-vue": 2,
    "vue/multi-word-component-names": "off",

    // "vue/singleline-html-element-content-newline": ["error", {
    //   "ignoreWhenNoAttributes": true,
    //   "ignoreWhenEmpty": true,
    //   "ignores": ["pre", "textarea", "button"]
    //   // "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
    // }]
  },
}

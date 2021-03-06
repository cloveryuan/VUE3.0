module.exports = {
  "globals": {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
      //"plugin:vue/essential",
      // 使用 Vue 3 规则
      // https://eslint.vuejs.org/user-guide/#bundle-configurations
      'plugin:vue/vue3-strongly-recommended',
      "standard"
  ],
  "parserOptions": {
      "ecmaVersion": 13,
      "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  },
  "plugins": [
      "vue",
      "@typescript-eslint"
  ],
  "rules": {
  }
};

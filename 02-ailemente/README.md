# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


# src/styles/mixin.scss
定义了 namespace 变量为 el，使用 Mixin 注册一个可以重复使用的模块 b，可以通过传进来的 block 生成新的变量 $B，并且变量会渲染在 class 上，并且注册了 when 可以新增 class 选择器，实现多个 class 的样式。


# Container.vue
我们使用 b(container) 生成.el-container 样式类，在内部使用 when(vertical)生成.el-container.is-vertical 样式类，去修改 flex 的布局方向。

在上面的代码中，我们使用 b(container) 生成.el-container 样式类，在内部使用 when(vertical)生成.el-container.is-vertical 样式类，去修改 flex 的布局方向。
```css
.el-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.el-container.is-vertical {
  flex-direction: column;
}
```

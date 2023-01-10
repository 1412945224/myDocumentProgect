/// <reference types="vite/client" />

/**
 * @下面代码块 解决main.ts 引入./App.vue 报错
 *
 * @报错原因 未定义 .vue文件的类型，导致 ts 无法解析其类型，在env.d.ts中定义后即可解决。
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}

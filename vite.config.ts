import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 设置别称
  resolve: {
    alias: [
      {
        find: "@", // 别名
        replacement: resolve(__dirname, "src"), // 别名对应地址
      },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "src/utils"),
      },
    ],
    // 或者这种写法
    // alias: {
    //   "@": path.resolve(__dirname, "src"),
    //   "@utils": path.resolve(__dirname, "src/utils"),
    // },
  },
  //引用全局scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/index.scss";`,
      },
    },
  },
});

# scss

1、下载依赖

    npm i sass-loader sass -D

## 全局引入

1、在 src 下新建文件夹 style/index.scss

    在 index.scss 文件内声明的样式， 在所有的页面都可以直接使用，不用再次声明，也可以做到样式统一

2、vite.config.ts 添加

```
 // 引用全局 scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/index.scss";`,
      },
    },
  },
```

# ElementUI

## 完整引入

### 第一步安装

`npm install element-plus --save`

### 第二步使用

1、 配置 main.ts

`import ElementPlus from 'element-plus'`

`import 'element-plus/dist/index.css'`

2、挂载到 vue 上

`app.use(ElementPlus)`

3、如果使用 Volar，需要在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型

```
// tsconfig.json

{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}

```

## 自动引入

### 第一步安装

安装 unplugin-vue-components 和 unplugin-auto-import

`npm install -D unplugin-vue-components unplugin-auto-import`

### 第二步使用

在 vite.config.ts,添加如下配置

```
// vite.config.ts

import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'

import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({

  // ...
  plugins: [
    // ...

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
})
```

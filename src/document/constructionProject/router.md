# 如何使用 router

    npm install vue-router@4

## 新建 router 文件

    1、在 src 下新建一个文件夹 取名 router

    2、在 router 文件夹下 新建 index.ts

    3、引入 createRouter, createWebHistory, RouteRecordRaw

        createRouter: 初始化方法，路由对象创建，方法挂载等

        createWebHistory： history 路由模式

        createWebHashHistory： hash 路由模式

        RouteRecordRaw: 路由记录的原始数据类型，包含了路由的所有信息

    4、抛出 router

## main.ts

    1、引入 router

        import router from "./router/index";

    2、挂载到vue上

        .use(router)

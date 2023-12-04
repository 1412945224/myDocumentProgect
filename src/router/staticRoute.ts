/***
 * @introduce 介绍：这个文件是存放静态页面路由的。
 * 
 * @emphasis   重点：需要手动新增
 * */

import { RouteRecordRaw } from "vue-router";
// 静态路由 => 手动新增
export const staticRoute: Array<RouteRecordRaw> = [
  {
    name: "首页",
    path: "/",
    component: () => import("@/views/home/index.vue"),
  },
  {
    name: "登录",
    path: "/login",
    component: () => import("@/views/loginPage/index.vue"),
  }
];


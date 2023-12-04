/***
 * @introduce 介绍：这个文件是存放功能性页面路由的。
 * 
 * @emphasis   重点：需要手动新增
 * */

import { RouteRecordRaw } from "vue-router";

export const alityRoute: Array<RouteRecordRaw> = [
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/alityViews/404.vue"),
  },
]
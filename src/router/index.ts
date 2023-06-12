import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    name: "首页",
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "About",
    path: "/About",
    component: () => import("@/views/About.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {});
router.afterEach((to) => {});
export default router;

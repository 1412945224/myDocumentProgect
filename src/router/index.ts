import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// 静态路由
import { staticRoute } from '@/router/staticRoute';
// 功能性路由
import { alityRoute } from '@/router/alityRoute';
const routes = [...staticRoute, ...alityRoute];
const router = createRouter({
  // 路由模式
  history: createWebHistory(),
  routes,
});
// 路由守卫 跳转路由之前
router.beforeEach(() => { });
// 路由守卫 跳转路由之后
router.afterEach((to) => { });
export default router;

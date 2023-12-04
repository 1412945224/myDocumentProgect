/**
 * @emphasis   重点：生成自动路由，不够完善，有时间优化一下
 * 
 * @supplement 补充：目前npm 有已经封装好的插件,但是缺点有点难以接受 unplugin-vue-router
 * 
 * @link 链接： https://www.cnblogs.com/wenxinsj/articles/17732402.html
 * 
 * */
import { RouteRecordRaw } from "vue-router";
function dynamicRoutes() {
  // 获取views文件夹下的所有 vue 文件
  const localFiles = import.meta.glob("./../views/**/*.vue");
  // 声明文件路径列表
  const lowercasePath: { [key: string]: unknown } = {};
  for (const key in localFiles) {
    // 改为小写命名
    lowercasePath[key.toLowerCase()] = localFiles[key];
  }
  // 声明路由
  const routers: Array<RouteRecordRaw> = Object.keys(lowercasePath).map(item => {
    // 去掉多余的
    let path = item.split('views')[1].split('.')[0].replace('', '/')
    return {
      name: '',
      path: path,
      component: lowercasePath[item] as undefined,
      redirect: ''
    }
  })
  return routers
}
export {
  dynamicRoutes
};

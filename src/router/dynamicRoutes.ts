function dynamicRoutes() {
  // 获取views文件夹下的所有 vue 文件
  const localFiles = import.meta.glob("./../views/**/*.vue");
  // 遍历 文件路径 列表 ，改为小写命名
  for (const key in localFiles) {
    const lowercasePath: { [key: string]: any } = {};
    lowercasePath[key.toLowerCase()] = localFiles[key];
  }
  
}
export default dynamicRoutes;

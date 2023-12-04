import { ref } from "vue";

// 一维数组转树形结构数组
/**
 * @param data 原始数组数据
 *
 * @param parent 上级
 *
 * @param nowaday 当前
 *
 * @param top 最顶级
 */
 const OneDimensionalArrayToTreeStructureArray = (
  data: any,
  parent: string,
  nowaday: string,
  top: any
): any => {
  // 设置边界，当原始数据为空时，不再执行
  if (!data) {
    return [];
  }
  // 声明存放重组后的数组
  const reassembledArray: any = ref();
  // 找到所有最顶级的头部数据
  data.forEach((element: any) => {
    if (element[parent] === top) {
      const children = OneDimensionalArrayToTreeStructureArray(
        data,
        parent,
        nowaday,
        element[nowaday]
      );
      // 找到最顶级数据后放进重组后的数组
      reassembledArray.push({ ...element, children });
    }
  });
  return reassembledArray;
};
export { OneDimensionalArrayToTreeStructureArray}

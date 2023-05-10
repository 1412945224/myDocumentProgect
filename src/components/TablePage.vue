<script lang="ts" setup>
import type { TableColumnCtx, Sort } from "element-plus";
import { watch, ref, computed } from "vue";
// 表格数据类型
interface TableData {
  [key: string]: any;
}
// 筛选函数类型
type filterTable = (
  value: string,
  row: TableData,
  column: TableColumnCtx<TableData>
) => boolean;
// 表头类型
interface ColumnType {
  prop: string;
  label: string;
  width?: string;
  fixed?: boolean | string;
  slot?: boolean;
  sortable?: boolean;
  filters?: { text: string; value: string }[];
  filterMethod?: filterTable;
}
// 配置类型
interface Props {
  // 分页 页码
  currentPage?: number;
  // 分页 数据展示数量
  pageSize?: number;
  // 分页 每页大小
  pageSizes?: number[];
  // 分页 超过多少也后折叠 5~21之间的奇数
  pagerCount?: number;
  // 分页 样式大小
  small?: boolean;
  // 分页 是否禁用
  disabled?: boolean;
  // 分页 是否展示背景色
  background?: boolean;
  // 分页 样式排版
  layout?: string;
  // 分页 数据数量
  total?: number;
  // table 表格斑马线
  stripe?: boolean;
  // table 表格边框
  border?: boolean;
  // table 表格高度
  height?: string;
  // table 表格最大高度
  maxHeight?: string;
  // table 表格单选
  highlightCurrentRow?: boolean;
  // table 表格默认排序
  defaultSort?: Sort;
  tableColumn: ColumnType[];
  tableData: TableData[];
  index?: boolean;
  selection?: boolean;
  expand?: boolean;
}
// 参数，以及设置默认值
const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  pageSize: 10,
  pageSizes: () => [10, 20, 30, 40, 50],
  pagerCount: 7,
  small: false,
  disabled: false,
  background: true,
  layout: "total, sizes, prev, pager, next, jumper",
  total: 0,
  stripe: true,
  border: true,
  maxHeight: "440",
  highlightCurrentRow: false,
  index: false,
  selection: false,
  expand: false,
});
// 回调事件
const emits = defineEmits<{ (e: "pageChange", page: number[]): void }>();
// 分页 页码 以及 当前页码数量
const pageOptions = ref<{ currentPage: number; pageSize: number }>({
  currentPage: props.currentPage,
  pageSize: props.pageSize,
});
/***
 * @alias watch (WatcherSource, Callback, [WatchOptions])
 *
 * @param WatcherSource：想要监听的响应式数据。
 *
 * @param Callback：执行的回调函数，入参（newValue,oldValue）。
 *
 * @param [WatchOptions]：deep、immediate、flush可选。
 *
 * @author 徐健
 */
watch(
  [() => pageOptions.value.currentPage, () => pageOptions.value.pageSize],
  (newValue) => {
    emits("pageChange", newValue);
  }
);
// 序号
const indexMethod = computed((): number => {
  const number =
    (pageOptions.value.currentPage - 1) * pageOptions.value.pageSize + 1;
  return number;
});
</script>
<template>
  <div class="tableBox">
    <el-table
      :data="tableData"
      style="width: 100%"
      :stripe="stripe"
      :border="border"
      :height="height"
      :maxHeight="maxHeight"
      :highlightCurrentRow="highlightCurrentRow"
      :defaultSort="defaultSort"
    >
      <!-- 表格展开 -->
      <el-table-column v-if="expand" type="expand" width="50">
        <template #default="scoped">
          <slot name="expand" :row="scoped.row"></slot>
        </template>
      </el-table-column>
      <!-- 展示下标 -->
      <el-table-column
        v-if="index"
        type="index"
        :index="indexMethod"
        width="50"
      />
      <!-- 展示多选 -->
      <el-table-column v-if="selection" type="selection" width="55" />
      <!-- 表头 -->
      <template v-for="item in tableColumn">
        <!-- 是否使用插槽 -->
        <el-table-column v-bind="item">
          <template v-if="item.slot" #default="scoped">
            <slot :name="item.prop" :row="scoped.row"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="pagination">
      <el-pagination
        v-model:current-page="pageOptions.currentPage"
        v-model:page-size="pageOptions.pageSize"
        :page-sizes="pageSizes"
        :pager-count="pagerCount"
        :small="small"
        :disabled="disabled"
        :background="background"
        :layout="layout"
        :total="total"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tableBox {
  border: 1px solid #ccc;
  padding: 10px 15px;
  box-sizing: border-box;
}
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
// 获取 canvas 元素
const canvas = ref();
function init() {
  // 通过判断getContext方法是否存在来判断浏览器的支持性
  if (canvas.value.getContext) {
    // 获取绘图上下文
    const ctx = canvas.value.getContext("2d");
    // 绘制一条从起点（x: 50, y:50）到 另一个点（x: 200, y:200）的直线
    // ctx.moveTo(50, 50); // 把路径移动到画布中的指定点，不创建线条
    // ctx.lineTo(200, 200); // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
    // ctx.stroke(); // 绘制已定义的路径
    // -----------------------------------
    // 绘制三角形
    // ctx.moveTo(600, 300);
    // ctx.lineTo(700, 300);
    // ctx.lineTo(700, 400);
    // ctx.lineTo(600, 300);
    // ctx.stroke();
    // ---------------------------------------
    // 绘制矩形
    // ctx.strokeRect(300, 300, 200, 100);
    // 绘制一个填充矩形
    // ctx.fillRect(300, 300, 200, 100);
    // 清除指定矩形区域，让清除部分完全透明
    // ctx.clearRect(75, 75, 100, 70);
  }
}

onMounted(() => {
  init();
});
</script>
<template>
  <div class="canvasBox">
    <canvas width="1400" height="700" ref="canvas">
      当前浏览器不支持canvas元素，请升级或更换浏览器！
    </canvas>
  </div>
</template>
<style lang="scss" scoped>
.canvasBox {
  width: 100%;
  height: 100%;
}
</style>

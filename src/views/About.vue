<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
function dynamicRoutes() {
  const localFiles = import.meta.glob("./../views/**/*.vue");
  console.log(localFiles, "localFiles");
  const lowercasePath: { [key: string]: any } = {};
  for (const key in localFiles) {
    
    lowercasePath[key.toLowerCase()] = localFiles[key];
  }
  console.log(lowercasePath, "lowercasePath");
}
const getGetDiagram = async () => {
  dynamicRoutes();
  router.push("/");
};
</script>

<template>
  <div>
    <el-button @click="getGetDiagram">请求</el-button>
  </div>
</template>
<style lang="scss" scoped></style>

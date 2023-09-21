/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-09-21 10:47:55
*/
<template>
  <el-config-provider :locale="zh">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import zh from "element-plus/dist/locale/zh-cn.mjs";
</script>
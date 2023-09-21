/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-09-21 11:09:04
*/
<template>
  <div class="demo">
    <vueDragMenuPlus @click="onClick" />
  </div>
</template>
<script setup>
import vueDragMenuPlus from "~/lib/index.vue";
const onClick = (obj, index) => {
  console.log(obj, 'click1111 obj');
  console.log(index, 'click1111 index');
};
</script>
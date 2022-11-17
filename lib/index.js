/*
 * @Author: aFei
 * @Date: 2022-11-17 14:27:47
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-11-17 14:48:23
*/
import vueDragMenuPlus from "./index.vue";
const arr = [vueDragMenuPlus];
const comment = {
  install(Vue) {
    arr.forEach(item => {
      Vue.component(item.name, item);
    })
  },
};
// 注入script方式vue中
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出为全量
export default comment;
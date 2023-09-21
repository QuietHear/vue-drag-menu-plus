/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-09-21 10:47:41
*/
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('view/index.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
});
export default router;
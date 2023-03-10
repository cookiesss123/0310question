import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: 'home', // 一開始進到的頁面
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'blog',
        component: () => import('../views/front/BlogView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'recipes',
        component: () => import('../views/front/RecipesView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active-link',
  routes
})

export default router

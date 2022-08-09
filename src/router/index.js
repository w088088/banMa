import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/destination',
    name: 'destination',
    component: () => import('../views/DestinationView.vue')
  },
  {
    path: '/product',
    name: 'product',
    redirect: '/product/individual',
    component: () => import('../views/ProductView.vue'),
    children: [
      {
        path: "individual",
        name: "individual",
        component: () => import("../views/IndView.vue")
      },
      {
        path: "team",
        name: "team",
        component: () => import("../views/TeamView.vue")
      }
    ]
  },
  {
    path: '/bmfind',
    name: 'bmfind',
    component: () => import('../views/BmFindView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('../views/AllView.vue')
  },
  {
    path: '/quality',
    name: 'quality',
    component: () => import('../views/QualityView.vue')
  },
  {
    path: "/searchDetail",
    name: "searchDetail",
    component: () => import("../views/SearchDetailView.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

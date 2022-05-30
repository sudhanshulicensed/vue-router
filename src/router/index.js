import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import BlogView from "./views/BlogView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // Imported AboutView this way.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: "/blog/:id",
    name: "blog1",
    component: () => import('../views/BlogView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

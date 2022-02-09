import { createRouter, createWebHistory } from 'vue-router'

import Login from "../components/Login.vue"
import Cardrestaurant from "../components/Cardrestaurant.vue"
import Menu from "../components/Menu.vue"
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/menu',
    name: 'About',
    component: Cardrestaurant
  }, {
    path: '/menu/:id',
    name: 'Menu',
    component: Menu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

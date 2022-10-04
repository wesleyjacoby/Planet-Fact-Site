import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Mercury from '../views/Mercury.vue'

const routes = [
  {
    path: '/',
    name: 'mercury',
    component: Mercury
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/',
    name: 'Board',
    component: () => import('../components/KanbanBoard.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/auth/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/auth/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../components/auth/Logout.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

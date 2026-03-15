import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/sobre-nosaltres',
      name: 'sobre-nosaltres',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ajuda',
      name: 'ajuda',
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/jocs',
      name: 'jocs',
      component: () => import('../views/LlistaJocsView.vue')
    },
    {
      path: '/crear-clip',
      name: 'crear-clip',
      component: () => import('../views/CrearClipView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    return { name: 'perfil' }
  }
})

export default router
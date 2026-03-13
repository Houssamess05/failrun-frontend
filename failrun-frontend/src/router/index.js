import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuth } from '@/composables/useAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/UserView.vue'),
      meta: { requiresAuth: true }
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
  const { estaAutenticat } = useAuth()

  if (to.meta.requiresAuth && !estaAutenticat()) {
    return { name: 'login' }
  }
})

export default router
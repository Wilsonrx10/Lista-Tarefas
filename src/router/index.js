import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tarefa',
    name: 'tarefas_componente',
    component: () => import('../views/Tarefas.vue')
  },
  {
    path: '/sobre',
    name: 'sobre_componente',
    component: () => import('../views/Sobre.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

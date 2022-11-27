import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue")
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/equipamento',
    name: 'equipamento',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCadastroEquipamento.vue')
  },

  {
    path: '/usuario',
    name: 'usuario',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCadastroUsuario.vue')
  },

  {
    path: '/setor',
    name: 'setor',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewCadastroSetor.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

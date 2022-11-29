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
    path: '/cadastro/sala',
    name: 'sala',
    
    component: () => import('../views/ViewCadastroSala.vue')
  },

  {
    path: '/cadastro/equipamento',
    name: 'equipamento',
    
    component: () => import('../views/ViewCadastroEquipamento.vue')
  },

  {
    path: '/cadastro/usuario',
    name: 'usuario',
    
    component: () => import('../views/ViewCadastroUsuario.vue')
  },

  {
    path: '/cadastro/setor',
    name: 'setor',
    
    component: () => import('../views/ViewCadastroSetor.vue')
  },

  {
    path: '/cadastro/predio',
    name: 'predio',
    
    component: () => import('../views/ViewCadastroPredio.vue')
  },

  {
    path: '/cadastro/status',
    name: 'status',
    
    component: () => import('../views/ViewCadastroStatus.vue')
  },

  {
    path: '/cadastro/tipo',
    name: 'tipo',
    
    component: () => import('../views/ViewCadastroTipo.vue')
  },


  //EndPoints Das Consultas

  {
    path: '/consulta/equipamento',
    name: 'consulta',
    
    component: () => import('../views/ViewConsultaEquipamento.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

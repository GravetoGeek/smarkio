import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/intencoes',
    name:'Intenções',
    component:Intencoes
  },
  {
    path:'/mensagens',
    name:'Mensagens',
    component:Mensagens
  },
  {
    path:'/status',
    name:'Status',
    component:Status
  },
  {
    path:'/usuarios',
    name:'Usuários',
    component:Usuarios
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

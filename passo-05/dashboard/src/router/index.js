import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Intencoes from '../views/Intencoes.vue'
import Mensagens from '../views/Mensagens.vue'
import Status from '../views/Status.vue'
import Usuarios from '../views/Usuarios.vue'

Vue.use(VueRouter)
Vue.use(Intencoes)
Vue.use(Mensagens)
Vue.use(Status)
Vue.use(Usuarios)

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
    name:'Intencoes',
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
    name:'Usuarios',
    component:Usuarios
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

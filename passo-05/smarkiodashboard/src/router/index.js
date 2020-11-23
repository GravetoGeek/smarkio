import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Intencoes from '../views/Intencoes.vue'
import Mensagens from '../views/Mensagens.vue'
import Status from '../views/Status.vue'
import Usuarios from '../views/Usuarios.vue'
Vue.use(Router)
Vue.use(Intencoes)
Vue.use(Mensagens)
Vue.use(Status)
Vue.use(Usuarios)
export default new Router({
  routes: [
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
      path: '/intencoes',
      name: 'Intencoes',
      component: Intencoes
    },
    {
      path: '/mensagens',
      name: 'Mensagens',
      component: Mensagens
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios
    }
  ],
  mode: 'history'
})

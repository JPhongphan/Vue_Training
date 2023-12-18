import Vue from 'vue'
import VueRouter from 'vue-router'
import MeView from '../views/MeView.vue'
// import Toolbar from '../views/Toolbar.vue'
// import Simple from '../views/Simple.vue'
// import Grade from '../views/Grade.vue'
// import APIcon from '../views/APIcon.vue'
import Products from '../views/Products.vue'
import Orders from '../views/Orders.vue'
import Products_Admin from '../views/Products_admin.vue'
// import Navbar from '../components/Navbar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'meview',
    component: MeView
  },
      {
        path: '/products',
        name: 'products',
        component: Products,
      },
      {
      path: '/products_admin',
      name: 'products_admin',
      component: Products_Admin,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    }
  // {
  //   path: '/simple',
  //   name: 'simple',
  //   component: Simple,
  // },
  //   {
  //   path: '/grade',
  //   name: 'grade',
  //   component: Grade,
  // },
  // {
  //   path: '/products',
  //   name: 'products',
  //   component: Products,
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Product from '../views/Product.vue'
import Account from '../views/Account.vue'
import Main from '../views/Main.vue'
import AddProd from '../views/AddProd.vue'
import EditProd from '../views/EditProd.vue'
import ManAdmApply from '../views/ManAdmApply.vue'
import ProductSearch from '../views/ProductSearch.vue'
import ManAdmList from '../views/ManAdmList.vue'
import RstPass from '../views/RstPass.vue'
import ViewProf from '../views/ViewProf.vue'
import Checkout from '../views/Checkout.vue'
import PastOrders from '../views/PastOrders.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/addprod',
    name: 'addprod',
    component: AddProd
  },
  {
    path: '/editprod',
    name: 'editprod',
    component: EditProd
  },
  {
    path: '/manadmapply',
    name: 'manadmapply',
    component: ManAdmApply
  },
  {
    path: '/prodsearch',
    name: 'prodsearch',
    component: ProductSearch
  },
  {
    path: '/manadmlist',
    name: 'manadmlist',
    component: ManAdmList
  },
  {
    path: '/rstpass',
    name: 'rstpass',
    component: RstPass
  },

  {
    path: '/PastOrders',
    name: 'PastOrders',
    component: PastOrders
  },
  {
    path: '/viewprof',
    name: 'viewprof',
    component: ViewProf
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import ShopNow from '../views/shopnow.vue'
import Tnc from '../views/Tnc.vue'
import ShipNreturn from '../views/ShipNreturn.vue'
import Collections from '../views/Collections.vue'
import CollectionsType from '../views/CollectionsType.vue'
import ContactInfo from '../views/ContactInfo.vue'
import admin from "./admin"
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import PayResponse from '../views/paymentResponse' 

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/collections',
    name: 'collections',
    component: Collections
  },
  {
    path: '/collections/:cName',
    name: 'collectionType',
    component: CollectionsType
  },
  {
    path: '/catalog/:pname',
    name: 'shopnow',
    component : ShopNow,
  },
  {
    path: '/cart/:name/contact',
    name: 'contactInfo',
    component : ContactInfo,
  },
  {
    path: '/terms',
    name: 'tnc',
    component: Tnc
  },
  {
    path: '/deliverypolicy',
    name: 'shipnreturn',
    component: ShipNreturn
  },
  {
    path:'/:user/cart',
    name : 'cart',
    component: Cart
  },
  {
    path:'/cart/:name/contact/checkout',
    name : 'checkout',
    component: Checkout
  },
  {
    path:'/paymentResponse',
    name : 'payResponse',
    component: PayResponse
  },

  ...admin
//   {
//     path: '/songs/create',
//     name: 'create-songs',
//     component: CreateSong
//   },
//   {
//     path: '/songs/:songId/edit',
//     name: 'edit',
//     component: EditSong
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

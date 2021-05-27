import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('../views/home/Home')
const Cart=()=>import('../views/cart/Cart')
const Category=()=>import('../views/category/Category')
const Me=()=>import('../views/me/Me')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/category',
    component:Category    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

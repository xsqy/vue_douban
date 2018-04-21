import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Detail from '../components/Detail/Detail.vue'
import Cart from '../components/Cart/Cart.vue'
import Goods from '../components/Cart/Goods.vue'
import List from '../components/List/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/list/:filmType',
      name:'list',
      component:List
    },
    {
      path:"/detail/:filmId",
      name:'detail',
      component:Detail
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/goods',
      name:'goods',
      component:Goods
    }
  ]
})

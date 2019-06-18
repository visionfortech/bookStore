import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cart from '@/pages/cart'
import Details from '@/pages/Details'

// Admin Components
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/posts/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})

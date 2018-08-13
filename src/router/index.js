import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import add_order from '@/view/sales/add_order'
import order_list from '@/view/sales/order_list'
import apply_edit from '@/view/sales/apply_edit'
import apply_cancle from '@/view/sales/apply_cancle'
import apply_change from '@/view/sales/apply_change'
import certificate from '@/view/sales/certificate'
import standing_book from '@/view/sales/standing_book'
import delete_order from '@/view/sales/delete_order'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/add_order',
          name: 'add_order',
          component: add_order
        },
        {
          path: '/order_list',
          name: 'order_list',
          component: order_list
        },
        {
          path: '/apply_edit',
          name: 'apply_edit',
          component: apply_edit
        },
        {
          path: '/apply_cancle',
          name: 'apply_cancle',
          component: apply_cancle
        },
        {
          path: '/apply_change',
          name: 'apply_change',
          component: apply_change
        },
        {
          path: '/standing_book',
          name: 'standing_book',
          component: standing_book
        },
        {
          path: '/certificate',
          name: 'certificate',
          component: certificate
        },
        {
          path: '/delete_order',
          name: 'delete_order',
          component: delete_order
        }]
    }
  ]
})

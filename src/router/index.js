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
import apply_information from '@/view/sales/apply_information'
import sale_home from '@/view/sales/sale_home'
import percentage from '@/view/sales/percentage'
import standing_book from '@/view/sales/standing_book'
import delete_order from '@/view/sales/delete_order'
import order_detail from '@/view/sales/order_detail'
import cancle_pact from '@/view/housekeeping/cancle_pact'
import commission_base from '@/view/housekeeping/commission_base'
import commission_stage from '@/view/housekeeping/commission_stage'
import customer_total from '@/view/housekeeping/customer_total'
import dispatch_list from '@/view/housekeeping/dispatch_list'
import pending_pact from '@/view/housekeeping/pending_pact'
import sale_list from '@/view/housekeeping/sale_list'
import settled_base from '@/view/housekeeping/settled_base'
import settled_stage from '@/view/housekeeping/settled_stage'
import settlement_base from '@/view/housekeeping/settlement_base'
import settlement_stage from '@/view/housekeeping/settlement_stage'
import sign_pact from '@/view/housekeeping/sign_pact'
import voucher_list from '@/view/housekeeping/voucher_list'
import cer_list from '@/view/review/cer_list'
import commission from '@/view/review/commission'
import line_pay_cer from '@/view/review/line_pay_cer'
import material from '@/view/review/material'
import outs_pact from '@/view/review/outs_pact'
import own_pact from '@/view/review/own_pact'
import pact_cancel_cer from '@/view/review/pact_cancel_cer'
import pact_receipt_cer from '@/view/review/pact_receipt_cer'
import partner_pact from '@/view/review/partner_pact'
import partner_profit_cer from '@/view/review/partner_profit_cer'
import stage_receipt_cer from '@/view/review/stage_receipt_cer'
import standing_book2 from '@/view/review/standing_book'
import confirmed_wo from '@/view/field/confirmed_wo'
import handle_wo from '@/view/field/handle_wo'
import finished_wo from '@/view/field/finished_wo'
import ready_change_wo from '@/view/field/ready_change_wo'
import changed_wo from '@/view/field/changed_wo'
import cer_list2 from '@/view/field/cer_list2'
import standing_book3 from '@/view/field/standing_book3'
import pact_pending_receipt from '@/view/finance/pact_pending_receipt'
import pact_already_paid from '@/view/finance/pact_already_paid'
import partner_wait from '@/view/finance/partner_wait'
import partner_add from '@/view/finance/partner_add'
import line_pending_pay from '@/view/finance/line_pending_pay'
import line_paid from '@/view/finance/line_paid'
import cancel_pact_wait from '@/view/finance/cancel_pact_wait'
import cancel_pact_deal from '@/view/finance/cancel_pact_deal'
import stage_cost from '@/view/finance/stage_cost'
import standing_book4 from '@/view/finance/standing_book4'
import cer_list3 from '@/view/finance/cer_list3'
import commission2 from '@/view/finance/commission2'
import standing_book_list from '@/view/executive/standing_book_list'
import cer_list4 from '@/view/executive/cer_list4'
import pending_upload from '@/view/business/pending_upload'
import already_upload from '@/view/business/already_upload'
import cancel_list_no_upload from '@/view/business/cancel_list_no_upload'
import commission_base2 from '@/view/business/commission_base2'
import commission_stage2 from '@/view/business/commission_stage2'
import add_count from '@/view/admin/add_count'
import count_list from '@/view/admin/count_list'
import template_design from '@/view/admin/template_design'

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
        //销售权限
        {
          path: '/sale_home',
          name: 'sale_home',
          component: sale_home
        },
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
        },
        {
          path: '/apply_information',
          name: 'apply_information',
          component: apply_information
        },
        {
          path: '/percentage',
          name: 'percentage',
          component: percentage
        },
        {
          path: '/order_detail',
          name: 'order_detail',
          component: order_detail
        },
        //内务权限
        {
          path: '/pending_pact',
          name: 'pending_pact',
          component: pending_pact
        },
        {
          path: '/sign_pact',
          name: 'sign_pact',
          component: sign_pact
        },
        {
          path: '/commission_base',
          name: 'commission_base',
          component: commission_base
        },
        {
          path: '/settlement_base',
          name: 'settlement_base',
          component: settlement_base
        },
        {
          path: '/settled_base',
          name: 'settled_base',
          component: settled_base
        },
        {
          path: '/commission_stage',
          name: 'commission_stage',
          component: commission_stage
        },
        {
          path: '/settlement_stage',
          name: 'settlement_stage',
          component: settlement_stage
        },
        {
          path: '/settled_stage',
          name: 'settled_stage',
          component: settled_stage
        },
        {
          path: '/sale_list',
          name: 'sale_list',
          component: sale_list
        },
        {
          path: '/dispatch_list',
          name: 'dispatch_list',
          component: dispatch_list
        },
        {
          path: '/cancle_pact',
          name: 'cancle_pact',
          component: cancle_pact
        },
        {
          path: '/customer_total',
          name: 'customer_total',
          component: customer_total
        },
        {
          path: '/voucher_list',
          name: 'voucher_list',
          component: voucher_list
        },
        //审核权限
        {
          path: '/own_pact',
          name: 'own_pact',
          component: own_pact
        },
        {
          path: '/outs_pact',
          name: 'outs_pact',
          component: outs_pact
        },
        {
          path: '/partner_pact',
          name: 'partner_pact',
          component: partner_pact
        },
        {
          path: '/pact_receipt_cer',
          name: 'pact_receipt_cer',
          component: pact_receipt_cer
        },
        {
          path: '/pact_cancel_cer',
          name: 'pact_cancel_cer',
          component: pact_cancel_cer
        },
        {
          path: '/line_pay_cer',
          name: 'line_pay_cer',
          component: line_pay_cer
        },
        {
          path: '/partner_profit_cer',
          name: 'partner_profit_cer',
          component: partner_profit_cer
        },
        {
          path: '/stage_receipt_cer',
          name: 'stage_receipt_cer',
          component: stage_receipt_cer
        },
        {
          path: '/material',
          name: 'material',
          component: material
        },
        {
          path: '/standing_book2',
          name: 'standing_book2',
          component: standing_book2
        },
        {
          path: '/cer_list',
          name: 'cer_list',
          component: cer_list
        },
        {
          path: '/commission',
          name: 'commission',
          component: commission
        },
        //外勤权限
        {
          path: '/confirmed_wo',
          name: 'confirmed_wo',
          component: confirmed_wo
        },
        {
          path: '/handle_wo',
          name: 'handle_wo',
          component: handle_wo
        },
        {
          path: '/finished_wo',
          name: 'finished_wo',
          component: finished_wo
        },
        {
          path: '/ready_change_wo',
          name: 'ready_change_wo',
          component: ready_change_wo
        },
        {
          path: '/changed_wo',
          name: 'changed_wo',
          component: changed_wo
        },
        {
          path: '/cer_list2',
          name: 'cer_list2',
          component: cer_list2
        },
        {
          path: '/standing_book3',
          name: 'standing_book3',
          component: standing_book3
        },
        //财务权限
        {
          path: '/pact_pending_receipt',
          name: 'pact_pending_receipt',
          component: pact_pending_receipt
        },
        {
          path: '/pact_already_paid',
          name: 'pact_already_paid',
          component: pact_already_paid
        },
        {
          path: '/partner_wait',
          name: 'partner_wait',
          component: partner_wait
        },
        {
          path: '/partner_add',
          name: 'partner_add',
          component: partner_add
        },
        {
          path: '/line_pending_pay',
          name: 'line_pending_pay',
          component: line_pending_pay
        },
        {
          path: '/line_paid',
          name: 'line_paid',
          component: line_paid
        },
        {
          path: '/cancel_pact_wait',
          name: 'cancel_pact_wait',
          component: cancel_pact_wait
        },
        {
          path: '/cancel_pact_deal',
          name: 'cancel_pact_deal',
          component: cancel_pact_deal
        },
        {
          path: '/stage_cost',
          name: 'stage_cost',
          component: stage_cost
        },
        {
          path: '/standing_book4',
          name: 'standing_book4',
          component: standing_book4
        },
        {
          path: '/cer_list3',
          name: 'cer_list3',
          component: cer_list3
        },
        {
          path: '/commission2',
          name: 'commission2',
          component: commission2
        },
        //高管权限
        {
          path: '/standing_book_list',
          name: 'standing_book_list',
          component: standing_book_list
        },
        {
          path: '/cer_list4',
          name: 'cer_list4',
          component: cer_list4
        },
        //业务会计权限
        {
          path: '/pending_upload',
          name: 'pending_upload',
          component: pending_upload
        },
        {
          path: '/already_upload',
          name: 'already_upload',
          component: already_upload
        },
        {
          path: '/cancel_list_no_upload',
          name: 'cancel_list_no_upload',
          component: cancel_list_no_upload
        },
        {
          path: '/commission_base2',
          name: 'commission_base2',
          component: commission_base2
        },
        {
          path: '/commission_stage2',
          name: 'commission_stage2',
          component: commission_stage2
        },
        //管理员权限
        {
          path: '/count_list',
          name: 'count_list',
          component: count_list
        },
        {
          path: '/add_count',
          name: 'add_count',
          component: add_count
        },
        {
          path: '/template_design',
          name: 'template_design',
          component: template_design
        }
      ]
    }
  ]
})

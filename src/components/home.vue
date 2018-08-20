<template id="home">
  <div class="home">
    <el-container>
      <el-aside width="250px">
        <img class="logo" src="../../static/img/logo.png"/>
        <div class="role" @click="returnHome"><router-link to="/home">{{role}}</router-link></div>
        <el-col>
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            background-color="#354b60"
            text-color="#fff"
            active-text-color="#F56C6C">
            <el-submenu v-if="obj.level == 1" v-for="obj in bars" :index="obj.id" >
              <template slot="title">
                <i :class="obj.icon"></i>
                <span>{{obj.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-if="obj1.parentId == obj.id " v-for="obj1 in bars" :index="obj1.id"><router-link :to="obj1.path">{{obj1.title}}</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header height="50px">Header</el-header>
        <el-main><breadcrumb :menu1="menu[0].title1" :menu2="menu[0].title2"></breadcrumb><router-view></router-view></el-main>
        <el-footer height="50px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import breadcrumb from '../view/component/breadcrumb';
  let userIndex=1;//1销售,2内务,3审核,4外勤,5财务,6高管,7业务会计
  let bars;
  let role;
  let menu=[];

  if(userIndex==1){
    role="销售";
    bars=[
      /*所有第一级菜单*/
      { title:'我的订单',
        id:"1",
        icon:"el-icon-tickets",
        level:1
      },
      { title:'申请列表',
        id:"2",
        icon:"el-icon-menu",
        level:1
      },
      { title:'查看',
        id:"3",
        icon:"el-icon-message",
        level:1
      },
      /*所有二级菜单*/
      { title:'新建订单',
        id:'1-1',
        parentId:1,
        level:2,
        path:'/add_order'
      },
      { title:'订单列表',
        id:'1-2',
        parentId:1,
        level:2,
        path:'/order_list'
      },
      { title:'申请修改',
        id:'2-1',
        parentId:2,
        level:2,
        path:'/apply_edit'
      },
      { title:'申请撤单',
        id:'2-2',
        parentId:2,
        level:2,
        path:'/apply_cancle'
      },
      { title:'申请变更',
        id:'2-3',
        parentId:2,
        level:2,
        path:'/apply_change'
      },
      { title:'总台账',
        id:'3-1',
        parentId:3,
        level:2,
        path:'/standing_book'
      },
      { title:'凭证',
        id:'3-2',
        parentId:3,
        level:2,
        path:'/certificate'
      },
      { title:'作废订单',
        id:'3-3',
        parentId:3,
        level:2,
        path:'/delete_order'
      }
    ]
  };
  if(userIndex==2){
    role="内务";
    bars=[
      /*所有第一级菜单*/
      { title:'自签合同',
        id:"1",
        icon:"el-icon-printer",
        level:1
      },
      { title:'转包合同',
        id:"2",
        icon:"el-icon-printer",
        level:1
      },
      { title:'合伙人合同',
        id:"3",
        icon:"el-icon-printer",
        level:1
      },
      { title:'提成设置',
        id:"4",
        icon:"el-icon-setting",
        level:1
      },
      { title:'销售信息',
        id:"5",
        icon:"el-icon-document",
        level:1
      },
      { title:'查看',
        id:"6",
        icon:"el-icon-message",
        level:1
      },
      /*所有二级菜单*/
      { title:'待签订合同',
        id:'1-1',
        parentId:1,
        level:2,
        path:'/pending_pact'
      },
      { title:'已签订合同',
        id:'1-2',
        parentId:1,
        level:2,
        path:'/sign_pact'
      },
      { title:'待签订合同',
        id:'2-1',
        parentId:2,
        level:2,
        path:'/pending_pact'
      },
      { title:'已签订合同',
        id:'2-2',
        parentId:2,
        level:2,
        path:'/sign_pact'
      },
      { title:'待签订合同',
        id:'3-1',
        parentId:3,
        level:2,
        path:'/pending_pact'
      },
      { title:'已签订合同',
        id:'3-2',
        parentId:3,
        level:2,
        path:'/sign_pact'
      },
      { title:'提成设置(基本业务)',
        id:'4-1',
        parentId:4,
        level:2,
        path:'/commission_base'
      },
      { title:'待结算',
        id:'4-2',
        parentId:4,
        level:2,
        path:'/settlement_base'
      },
      { title:'已结算',
        id:'4-3',
        parentId:4,
        level:2,
        path:'/settled_base'
      },
      { title:'提成设置(后端费用)',
        id:'4-4',
        parentId:4,
        level:2,
        path:'/commission_stage'
      },
      { title:'待结算',
        id:'4-5',
        parentId:4,
        level:2,
        path:'/settlement_stage'
      },
      { title:'已结算',
        id:'4-6',
        parentId:4,
        level:2,
        path:'/settled_stage'
      },
      { title:'销售信息列表',
        id:'5-1',
        parentId:5,
        level:2,
        path:'/sale_list'
      },
      { title:'派工单',
        id:'6-1',
        parentId:6,
        level:2,
        path:'/dispatch_list'
      },
      { title:'撤单合同',
        id:'6-2',
        parentId:6,
        level:2,
        path:'/cancle_pact'
      },
      { title:'客户总台账',
        id:'6-3',
        parentId:6,
        level:2,
        path:'/customer_total'
      },
      { title:'凭证列表',
        id:'6-4',
        parentId:6,
        level:2,
        path:'/voucher_list'
      },
    ]
  };
  if(userIndex==3){
    role="审核";
    bars=[
      /*所有第一级菜单*/
      { title:'合同',
        id:"1",
        icon:"el-icon-printer",
        level:1
      },
      { title:'凭证',
        id:"2",
        icon:"el-icon-tickets",
        level:1
      },
      { title:'材料',
        id:"3",
        icon:"el-icon-goods",
        level:1
      },
      { title:'查看',
        id:"4",
        icon:"el-icon-message",
        level:1
      },
      /*所有二级菜单*/
      { title:'自有合同',
        id:'1-1',
        parentId:1,
        level:2,
        path:'/own_pact'
      },
      { title:'转包合同',
        id:'1-2',
        parentId:1,
        level:2,
        path:'/outs_pact'
      },
      { title:'合伙人合同',
        id:'1-3',
        parentId:1,
        level:2,
        path:'/partner_pact'
      },
      { title:'合同收款凭证',
        id:'2-1',
        parentId:2,
        level:2,
        path:'/pact_receipt_cer'
      },
      { title:'撤单合同退款凭证',
        id:'2-2',
        parentId:2,
        level:2,
        path:'/pact_cancel_cer'
      },
      { title:'线索付款凭证',
        id:'2-3',
        parentId:2,
        level:2,
        path:'/line_pay_cer'
      },
      { title:'合伙人分润凭证',
        id:'2-4',
        parentId:2,
        level:2,
        path:'/partner_profit_cer'
      },
      { title:'后端费用收款凭证',
        id:'2-5',
        parentId:2,
        level:2,
        path:'/stage_receipt_cer'
      },
      { title:'材料（外勤、业务会计）',
        id:'3-1',
        parentId:3,
        level:2,
        path:'/material'
      },
      { title:'总台账',
        id:'4-1',
        parentId:4,
        level:2,
        path:'/standing_book2'
      },
      { title:'凭证列表',
        id:'4-2',
        parentId:4,
        level:2,
        path:'cer_list'
      },
      { title:'提成',
        id:'4-3',
        parentId:4,
        level:2,
        path:'/commission'
      }
    ]
  };
  if(userIndex==4){
    role="外勤";
    bars=[
      /*所有第一级菜单*/
      { title:'派工单',
        id:"1",
        icon:"el-icon-tickets",
        level:1
      },
      { title:'变更',
        id:"2",
        icon:"el-icon-edit-outline",
        level:1
      },
      { title:'查看',
        id:"3",
        icon:"el-icon-message",
        level:1
      },
      /*所有二级菜单*/
      { title:'待确认',
        id:'1-1',
        parentId:1,
        level:2,
        path:'/confirmed_wo'
      },
      { title:'正办理',
        id:'1-2',
        parentId:1,
        level:2,
        path:'/handle_wo'
      },
      { title:'已完成',
        id:'1-3',
        parentId:1,
        level:2,
        path:'/finished_wo'
      },
      { title:'待确认变更',
        id:'2-1',
        parentId:2,
        level:2,
        path:'/ready_change_wo'
      },
      { title:'已确认变更',
        id:'2-2',
        parentId:2,
        level:2,
        path:'/changed_wo'
      },
      { title:'凭证列表',
        id:'3-1',
        parentId:3,
        level:2,
        path:'/cer_list2'
      },
      { title:'总台账',
        id:'3-2',
        parentId:3,
        level:2,
        path:'/standing_book3'
      }
    ]
  };
  if(userIndex==5){
    role="财务";
    bars=[
      /*所有第一级菜单*/
      { title:'合同',
        id:"1",
        icon:"el-icon-printer",
        level:1
      },
      { title:'合伙人',
        id:"2",
        icon:"el-icon-star-off",
        level:1
      },
      { title:'线索',
        id:"3",
        icon:"el-icon-edit",
        level:1
      },
      { title:'撤单合同',
        id:"4",
        icon:"el-icon-printer",
        level:1
      },
      { title:'后端费用合同',
        id:"5",
        icon:"el-icon-printer",
        level:1
      },
      { title:'查看',
        id:"6",
        icon:"el-icon-message",
        level:1
      },
      /*所有二级菜单*/
      { title:'待收款',
        id:'1-1',
        parentId:1,
        level:2,
        path:'/pact_pending_receipt'
      },
      { title:'已付款',
        id:'1-2',
        parentId:1,
        level:2,
        path:'/pact_already_paid'
      },
      { title:'待添加对账单',
        id:'2-1',
        parentId:2,
        level:2,
        path:'/partner_wait'
      },
      { title:'已添加',
        id:'2-2',
        parentId:2,
        level:2,
        path:'/partner_add'
      },
      { title:'待付款',
        id:'3-1',
        parentId:3,
        level:2,
        path:'/line_pending_pay'
      },
      { title:'已付款',
        id:'3-2',
        parentId:3,
        level:2,
        path:'/line_paid'
      },
      { title:'待处理',
        id:'4-1',
        parentId:4,
        level:2,
        path:'/cancel_pact_wait'
      },
      { title:'已处理',
        id:'4-2',
        parentId:4,
        level:2,
        path:'/cancel_pact_deal'
      },
      { title:'后端费用',
        id:'5-1',
        parentId:5,
        level:2,
        path:'/stage_cost'
      },
      { title:'总台账信息',
        id:'6-1',
        parentId:6,
        level:2,
        path:'/standing_book4'
      },
      { title:'凭证列表',
        id:'6-2',
        parentId:6,
        level:2,
        path:'/cer_list3'
      },
      { title:'提成信息',
        id:'6-3',
        parentId:6,
        level:2,
        path:'/commission2'
      }
    ]
  };
  if(userIndex==6){
    role="高管";
    bars=[
      /*所有第一级菜单*/
      { title:'客户总台账',
        id:"1",
        icon:"el-icon-tickets",
        level:1
      },
      { title:'凭证',
        id:"2",
        icon:"el-icon-sold-out",
        level:1
      },
      /*所有二级菜单*/
      { title:'总台账列表',
        id:'1-1',
        parentId:1,
        level:2,
        path:'standing_book_list'
      },
      { title:'凭证列表',
        id:'2-1',
        parentId:2,
        level:2,
        path:'cer_list4'
      }
    ]
  };
  if(userIndex==7){
    role="业务会计";
    bars=[
      /*所有第一级菜单*/
      { title:'国地税报道/银行开户凭证',
        id:"1",
        icon:"el-icon-tickets",
        level:1
      },
      { title:'提成',
        id:"2",
        icon:"el-icon-goods",
        level:1
      },
      /*所有二级菜单*/
      { title:'待上传',
        id:'1-1',
        parentId:1,
        level:2,
        path:'/pending_upload'
      },
      { title:'已上传',
        id:'1-2',
        parentId:1,
        level:2,
        path:'/already_upload'
      },
      { title:'已确认撤单列表（未上传）',
        id:'1-3',
        parentId:1,
        level:2,
        path:'/cancel_list_no_upload'
      },
      { title:'基本业务提成列表',
        id:'2-1',
        parentId:2,
        level:2,
        path:'/commission_base2'
      },
      { title:'后端费用提成列表',
        id:'2-2',
        parentId:2,
        level:2,
        path:'/commission_stage2'
      }
    ]
  };
  export default {
    name: 'home',
    data () {
      return{
        bars:bars,
        role:role,
        menu:[{title1:role,title2:"工作台"}]
        }
      },
    methods: {
      handleSelect(key, keyPath) {
        let title1,title2="";
        title1=bars[keyPath[0]-1].title;
        for(let i=0;i<bars.length;i++){
          if(bars[i].id==key){
            title2=bars[i].title;
            break;
          }
        }
        this.menu=[{title1,title2}];
      },
      returnHome(){
        this.menu=[{title1:"工作台",title2:""}];
      }
    },
    components: {
      breadcrumb
    }
  }
</script>

<style scoped>
  .home{
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 50px;
  }

  .el-aside {
    background-color: #354b60;
    color: #333;
    text-align: left;
  }

  .el-main {
    background-color: #eee;
    color: #333;
    text-align: center;
  }

 .el-container {
    min-height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu{
    border: 0;
  }
  .is-opened i:nth-child(1){
   color: #e70012;
  }
  .el-menu-item{
    padding-left: 55px !important;
  }
  .el-menu-item a{
    color: #fff;
    display: block;
  }
  .el-menu-item.is-active a{
    color: #e70012;
  }
  .logo{
    width: 60%;
    padding: 5% 20%;
    background: #354b60;
    display: block;
  }
  .role{
    color: #fff;
    padding:10px 0 10px 33px;
    margin: 0 20px 10px 20px;
    background: url("../../static/img/person.png") no-repeat left center;
    border-bottom: 1px solid #999;
  }
  .role a{
    display: block;
    color: #fff;
  }
</style>

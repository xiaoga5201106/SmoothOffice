<template id="tableList">
  <el-table
    :data="tableData"
    style="width: 100%"
    :header-cell-style="headerColor"
    :cell-style="cellStyle">
    <el-table-column v-if="chooseAll=='true'"
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      v-for="title in titles"
      v-if="title.label!='id'"
      v-bind:prop="title.prop"
      v-bind:label="title.label"
      v-bind:class-name="title.prop"
      align="center">
    </el-table-column>
    <el-table-column label="凭证内容" align="center" v-if="cerList=='true'">
      <template slot-scope="scope" >
      <div class="cerList"><img v-for="cerList in tableData[0].vouchers_content" :src="cerList.ossUrl" style="width: 40px;height: 40px;margin-right: 5px;cursor: pointer" @click="openImg(cerList.ossUrl)"></div>
      </template>
    </el-table-column>
    <el-table-column label="操作" v-if="operate=='true'" align="center" width="130px">
      <template slot-scope="scope" >
          <div v-if="type == 'order_list'">
              <el-button
                size="mini" @click="opendialogForSee(scope.$index, scope.row)">查看订单详情</el-button>
              <el-button
              size="mini"
              @click=""><router-link :to="{name:'order_progress', query: {order_id:tableData[scope.$index].order_id}}">查看进度</router-link></el-button>
              <el-button
              size="mini"
              @click="opendialogForApplyAlter(scope.$index, scope.row)" v-if="tableData[scope.$index].order_status=='已提交'">申请修改</el-button>
              <el-button
              size="mini"
              @click="opendialogForApplyRevoke(scope.$index, scope.row)" v-if="tableData[scope.$index].order_status=='已提交'">申请撤单</el-button>
              <el-button
              size="mini"
              @click="opendialogForApplyChange(scope.$index, scope.row)" v-if="tableData[scope.$index].order_status=='已提交'&&(tableData[scope.$index].service_type !='税筹-自有业务-多次付款' && tableData[scope.$index].service_type !='税筹-转包业务-转包业务' && tableData[scope.$index].service_type !='基础业务-自有业务-财务业务' && tableData[scope.$index].service_type !='税筹-转包业务-返佣业务')">申请变更</el-button>
              <el-button
              size="mini"
              v-if="tableData[scope.$index].order_status=='待提交'"><router-link :to="{name:'change_order', query:{order_id:tableData[scope.$index].id}}">修改</router-link></el-button>
              <el-button
              size="mini"
              @click="opendialogDelete(scope.$index, scope.row)" v-if="tableData[scope.$index].order_status=='待提交'">作废</el-button>
              <el-button
              size="mini"
              type="danger"
              @click="submit(scope.$index, scope.row)" v-if="tableData[scope.$index].order_status=='待提交'">提交</el-button>
          </div>

          <div v-else-if="type == 'wait_audit'">
                <el-button
              size="mini">
              <router-link :to="{name:'apply_information', query:{order_id:tableData[scope.$index].order_id,id:tableData[scope.$index].id, type:'wait_audit',father:father}}">查看申请信息</router-link></el-button>
          </div>

          <div v-else-if="type == 'pass'">
                <el-button
              size="mini">
              <router-link :to="{name:'apply_information', query:{order_id:tableData[scope.$index].order_id,id:tableData[scope.$index].id, type:'pass',father:father}}">查看申请信息</router-link></el-button>
          </div>

          <div v-else-if="type == 'no_pass'">
                <el-button
              size="mini">
              <router-link :to="{name:'apply_information', query:{order_id:tableData[scope.$index].order_id, id:tableData[scope.$index].id,type:'no_pass',father:father}}">查看信息</router-link></el-button>
          </div>

          <div v-else-if="type == 'standing_book'">
                <el-button
              size="mini"
              @click="opendialogForEditor(scope.$index, scope.row)"><router-link :to="'./standingbook_detail'">查看总台账信息</router-link></el-button>
          </div>

          <div v-else-if="type == 'certificate'" >
                <el-button
              size="mini"
              @click="opendialogForEditor(scope.$index, scope.row)">下载</el-button>
          </div>

           <div v-else-if="type == 'delete_order'" >
                <el-button
              size="mini"
              @click="opendialogForSee1(scope.$index, scope.row)">查看订单详情</el-button>
          </div>
             <div v-else-if="type == 'count_list'" >
                <el-button
              size="mini"
              @click="opendialogForSee1(scope.$index, scope.row)"><router-link :to="{name:'audit_count', query:{order_id:tableData[scope.$index].id}}">修改</router-link></el-button>
                <el-button
                v-if="tableData[scope.$index].state=='可用'"
              size="mini"
              @click="stopAccount(scope.$index, scope.row)">停用</el-button>
              <el-button
              v-if="tableData[scope.$index].state=='停用'"
              size="mini"
              @click="opendialogForSee1(scope.$index, scope.row)">恢复使用</el-button>
               <el-button
              size="mini"
              @click="opendialogForEidtpsw(scope.$index, scope.row)">修改密码</el-button>
          </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "tableList",
        props:['titles','tableData','operate','type','father','chooseAll','cerList'],
        inject: ['reload'],
        data() {
        return {
          height:200,
        }
      },
      methods: {
            opendialogForEditor(index,row){
              let flag = "编辑";
              this.$emit('open',row.id,flag);

            },

            opendialogForSee(index,row){
              let flag = "查看订单详情";
              this.$emit('open',row.id,flag);
            },
              opendialogForSee1(index,row){
              let flag = "查看订单详情";
              this.$emit('open',row.id,flag);
            },
            opendialogForApplyAlter(index,row){
              let flag = "申请修改";
              this.$emit('open',row.id,flag);
            },
            opendialogForApplyRevoke(index,row){
              let flag = "申请撤单";
              this.$emit('open',row.id,flag);
            },
            opendialogForApplyChange(index,row){
              let flag = "申请变更";
              this.$emit('open',row.id,flag);
            },
            opendialogForEidtpsw(index,row){
                let flag = "修改密码";
              this.$emit('open',row.id,flag);
            },
            stopAccount(index,row){
              let that=this;
              this.$confirm('是否确定停用?', '停用账号', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
              }).then(() => {
                //拿到token
                const token = localStorage.getItem('token');
                //废除订单
                this.$axios.post(this.$baseURL+'/event/disable-slbAccount',{
                  id:0,
                  slbAccountId:row.id,
                },{
                  headers: {
                    "Authorization": "Bearer" + " " + token
                  }
                })
                  .then(function (res) {
                    that.$message({
                      type: 'success',
                      message: '已停用此账号!'
                    });
                    //表格刷新
                    that.$emit('refresh');
                  }).catch(function (err) {
                  that.$message({
                    type: 'error',
                    message: '停用失败!'
                  });
                });
              }).catch(() => {
                that.$message({
                  type: 'info',
                  message: '已取消停用'
                });
              });
            },
            openImg(url) {
            this.$alert('<img src='+url+' style="width:100%"/>', '查看凭证', {
              dangerouslyUseHTMLString: true,
              showConfirmButton:false
            }).catch(() => {
            });;
            },
            opendialogDelete(index,row){
              let that=this;
              this.$confirm('是否确定作废?', '作废提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
              }).then(() => {
                //拿到token
                const token = localStorage.getItem('token');
                //废除订单
                this.$axios.post(this.$baseURL+'/event/cancel-slb-orders',{
                  slbOrderId:row.id,
                },{
                  headers: {
                    "Authorization": "Bearer" + " " + token
                  }
                })
                  .then(function (res) {
                    that.$message({
                      type: 'success',
                      message: '作废成功!'
                    });
                    //表格刷新
                    that.$emit('refresh');
                  }).catch(function (err) {
                  that.$message({
                    type: 'error',
                    message: '作废失败!'
                  });
                });
              }).catch(() => {
                that.$message({
                  type: 'info',
                  message: '已取消作废'
                });
              });
            },
            submit(index,row){
              this.$confirm('是否确认提交?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                  let that = this;
                  const token = localStorage.getItem('token');
                  this.$axios.post(this.$baseURL+'/event/submit-slb-orders',{
                    slbOrderId:row.id
                  },
                  {
                    headers: {
                      "Authorization": "Bearer"+" "+token
                    }
                  }
                )
                  .then(function(res){
                    that.$message({
                      message : '提交订单成功！',
                      type : 'success'
                    });

                    that.reload()
                  })
                  .catch(function(err){
                    console.log(err);
                  })
              }).catch(() => {

              });
            },
            headerColor(row, rowIndex) {
              return 'background:#e70012;color:#fff';
            },
            cellStyle(row, column, rowIndex, columnIndex){
              if(row.column.className=='order_status'&&row.row.order_status=='已提交'){
                return 'color:#8bc34a';
              }
              if(row.column.className=='order_status'&&row.row.order_status=='待提交'){
                return 'color:#e70012';
              }
              if(row.column.className=='pact_status'&&row.row.pact_status=='正办理'){
                return 'color:#FF9800';
              }
              if(row.column.className=='pact_status'&&row.row.pact_status=='待签订'){
                return 'color:#ccc';
              }
              if(row.column.className=='pact_status'&&row.row.pact_status=='已撤单'){
                return 'color:#e70012';
              }
              if(row.column.className=='pact_status'&&row.row.pact_status=='已完成'){
                return 'color:#8bc34a';
              }
              if(row.column.className=='status'&&row.row.status=='待审核'){
                return 'color:#FF9800';
              }
              if(row.column.className=='status'&&row.row.status=='已通过'){
                return 'color:#8bc34a';
              }
              if(row.column.className=='status'&&row.row.status=='不通过'){
                return 'color:#e70012';
              }
                if(row.column.className=='state'&&row.row.state=='可用'){
                return 'color:#8bc34a';
              }
               if(row.column.className=='state'&&row.row.state=='停用'){
                return 'color:#e70012';
              }
              if(row.column.className=='audit_remark'){
                return 'color:#e70012';
              }
               if(row.column.className=='state'){
                return 'color:#8bc34a';
              }
            },
            handleDelete(index,row){
              console.log(index);
            }
      }
}

</script>

<style scoped>
  .el-button{
    display: block;
    margin:5px 0 5px 0;
  }
  .cerList img{
    width: 40px;
  }
</style>

<template>
  <div id="main">
    <div>
      <div><el-tag>合同基本信息</el-tag></div>
      <formBox :labels="labels" flag="viewInformation"></formBox>
    </div>
    <div class="record">
      <div><el-tag>申请修改记录</el-tag></div>
      <tableList :titles="titles" :tableData="tableData" operate="false"></tableList>
    </div>
  </div>
</template>

<script>
   import formBox from '../component/formBox'
   import tableList from '../component/tableList'
    export default {
        name: "apply_information",
        components: {
         formBox,
         tableList
        },
      data () {
        return{
          labels:[
               {
                 key:'1',
                title:'订单编号'
               },
               {
                 key:'1',
                title:'客户名称'
               },
               {
                 key:'1',
                title:'区域'
               },
               {
                 key:'1',
                title:'合伙人名称'
               },
               {
                 key:'1',
                title:'业务类型'
               },
               {
                 key:'1',
                title:'合伙人销售'
               },
               {
                 key:'1',
                title:'协助成单'
               },
               {
                 key:'1',
                title:'订单提交时间'
               }
             ],
             titles:[
              /*表头*/
              { prop:'id',
                label:"序号"
              },
              { prop:'apply_remark',
                label:"申请备注"
              },
              { prop:'apply_time',
                label:"申请时间"
              },
              { prop:'vouchers_content',
                label:"凭证内容"
              },
              { prop:'type',
                label:"类型"
              },
              { prop:'auditor',
                label:"审核员"
              },
              { prop:'auditor_time',
                label:"审核时间"
              },
              { prop:'status',
                label:"状态"
              },
              { prop:'auditor_remark',
                label:"审核备注"
              }
            ],
            tableData:[{
              id: '01',
              apply_remark: '申请修改合同金额',
              apply_time: '2018-8-3 10:11:29',
              vouchers_content:'这里是图片',
              type:'申请修改凭证',
              auditor:'李姐',
              auditor_time:'2018-8-3 10:11:29',
              status:'不通过',
              auditor_remark:'凭证上传出错'
              }, {
                id: '02',
              apply_remark: '申请修改合同金额',
              apply_time: '2018-8-3 10:11:29',
              vouchers_content:'这里是图片',
              type:'申请修改凭证',
              auditor:'李姐',
              auditor_time:'2018-8-3 10:11:29',
              status:'不通过',
              auditor_remark:'凭证上传出错'
              }, {
                id: '03',
              apply_remark: '申请修改合同金额',
              apply_time: '2018-8-3 10:11:29',
              vouchers_content:'这里是图片',
              type:'申请修改凭证',
              auditor:'李姐',
              auditor_time:'2018-8-3 10:11:29',
              status:'不通过',
              auditor_remark:'凭证上传出错'
              }, {
                id: '04',
              apply_remark: '申请修改合同金额',
              apply_time: '2018-8-3 10:11:29',
              vouchers_content:'这里是图片',
              type:'申请修改凭证',
              auditor:'李姐',
              auditor_time:'2018-8-3 10:11:29',
              status:'不通过',
              auditor_remark:'凭证上传出错'
              }],
        }
      }
    }
</script>

<style scoped>
 .el-tag{
  width: 100%;
  text-align: left;
  padding: 10px;
  height: auto;
  font-size: 15px;
 }
 .record{
  margin-top:15px; 
 }
</style>

<template>
  <div id="login">
    <div id="form">
      <div class="login_logo">
        <!--<h1>容易投资</h1>
        <h3>www.easy-fortune.com</h3>-->
        <img src="../../static/img/logo.png"/>
      </div>
      <el-tabs v-model="activeName" stretch>
        <el-tab-pane label="短信验证登录" name="message_login">
          <el-form label-width="60px" :label-position="labelPosition">
            <el-form-item label="手机号" prop="telephone">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input></el-input>
              <el-button type="primary" size="small">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="login()"><router-link to="">登 录</router-link></el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="账号密码登录" name="username_login">
          <el-form label-width="60px" :label-position="labelPosition">
            <el-form-item label="账 号" prop="username">
              <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密 码" prop="password">
              <el-input type="password" v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="login()"><router-link to="">登 录</router-link></el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
          return {
            activeName: 'message_login',
            labelPosition:'left',
            username:"",
            password:""
          };
        },
        methods: {
          login() {
            let that=this;
            //axios登录获取token
              this.$axios.post(this.$baseURL+'/authenticate',{
                password:this.password,
                rememberMe:'true',
                username:this.username
            })
              .then(function(res){
                //存token
                const token = res.data.id_token;
                localStorage.setItem('token', token);
                that.$axios.get(that.$baseURL+'/currentUser/slb-accounts',{
                        headers:{
                          "Authorization": "Bearer"+" "+token
                        }
                })
                .then(function(ret){
                         console.log(ret.data.role)
                         if (ret.data.role=="ROLE_ADMIN") {
                          that.$router.push({path: '/count_list'});
                         }
                         else if (ret.data.role=="ROLE_XIAO_SHOU") {
                          that.$router.push({path: '/sale_home'});
                         }
                          else if (ret.data.role=="ROLE_CAI_WU") {
                          that.$router.push({path: ''});
                         }
                          else if (ret.data.role=="ROLE_GAO_GUAN") {
                          that.$router.push({path: ''});
                         }
                          else if (ret.data.role=="ROLE_NEI_WU") {
                          that.$router.push({path: ''});
                         }
                          else if (ret.data.role=="ROLE_SHEN_HE") {
                          that.$router.push({path: ''});
                         }
                          else if (ret.data.role=="ROLE_USER") {
                          that.$router.push({path: ''});
                         }
                           else if (ret.data.role=="ROLE_WAI_QING") {
                          that.$router.push({path: ''});
                         }
                           else if (ret.data.role=="ROLE_YE_WU_KUAI_JI_QING") {
                          that.$router.push({path: ''});
                         }

                })
                 .catch(function(err){
                        console.log(err)
                })

              })
              .catch(function(err){
                 console.log(err);
                that.$message.error('账号或密码错误');
              });
          }
        }
    }
</script>

<style scoped>
  #login{
    height: 100%;
    background: url("../../static/img/bg.jpg");
    background-size: 100% auto;
    overflow: auto;
  }
  #login a{
    color: #fff;
  }
  #form{
    width: 420px;
    padding: 30px;
    margin: 150px auto 0 auto;
    background: rgba(255,255,255,0.3);
  }
  .el-button--danger{
    width: 100%;
  }
  .login_logo img{
    width: 40%;
    background: transparent;
  }
  .el-tabs__item{
    font-size: 16px;
    position: relative;
  }
  .el-button--primary{
    position: absolute;
    right: 4px;
    top: 4px;
  }
</style>

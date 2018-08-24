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
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="login()"><router-link to="">登 录</router-link></el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="账号密码登录" name="username_login">
          <el-form label-width="60px" :label-position="labelPosition">
            <el-form-item label="账 号" prop="username">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="密 码" prop="password">
              <el-input type="password"></el-input>
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
            labelPosition:'left'
          };
        },
        methods: {
          login() {
            this.$router.push({path: '/sale_home'});
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
    background: rgba(255,255,255,0.5);
  }
  .el-button{
    width: 100%;
  }
  /*h1{
    font-weight: lighter;
    color:#f56c6c;
  }*/
  .login_logo img{
    width: 40%;
    background: transparent;
  }
  .el-tabs__item{
    font-size: 16px;
  }
</style>

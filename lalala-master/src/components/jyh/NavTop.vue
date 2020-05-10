<template>
  <div class="top">
    <ul>
      <li>
        <img
          src="../.././assets/jyh/img/logo@2x.png"
          style="width:150px;"
          alt=""
        />
      </li>
      <li><router-link to="/"  active-class='msy'> 首页</router-link></li>
      <li>云端工作</li>
      <li>程序员</li>
      <li>更多服务</li>
      <li>
        <p>
          <el-input
            v-model="search"
            placeholder="搜索程序员/接单"
            style="width:230px;"
          ></el-input
          ><span>搜索</span>
        </p>
      </li>
      <li v-on:click="login()">登录</li>
      <li><router-link to="zhuce" class="msy">注册</router-link></li>
    </ul>
    <!-- 登录表单 -->
    <div id="login" v-show="isShow">
      <div id="form">
        <p v-on:click="hide()">点击关闭</p>
        <form>
          <span>登录</span>
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
          <el-input
            type="password"
            v-model="passwprd"
            placeholder="请输入您的密码"
          ></el-input>
          <p>
            没有账号？<router-link style="color:#5b92fd" to=""
              >急速注册</router-link
            ><span>忘记密码</span>
          </p>
          <div>
            <input
              class="login"
              v-on:click="check()"
              type="button"
              value="立即登录"
            />
            <span>WeChat</span>
            <span>Sina</span>
            <span>Github</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Top",
  data() {
    return {
      search: "",
      username: "",
      passwprd: "",
      isShow: false
    };
  },
  methods: {
    login() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    check() {
      if (
        this.passwprd == (undefined | null) ||
        this.username == (undefined | null)
      ) {
        alert("请输入用户名和密码");
      }
    }
  }
};
</script>

<style>
.top ul {
  font-size: 14px;
  padding: 10px 0;
  line-height: 50px;
  width: 99vw;
  min-width: 960px;
  height: 50px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  /* position: absolute;
  top:10px; */
}
ul li:hover {
  cursor: pointer;
}
ul span {
  margin: 0 10px;
}
/*登录*/
#login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* display: none; */
  background: rgba(178, 178, 178, 0.4);
}
li .el-input__inner {
  height: 30px;
  border-radius: 15px;
}
#login #form {
  padding: 40px;
  background: #fff;
  position: fixed;
  margin: auto;
  width: 300px;
  height: 300px;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
#form p:nth-child(1) {
  text-align: right;
}
#form p span {
  float: right;
}
input.login {
  padding: 10px 30px;
  color: #fff;
  border: none;
  background: #5b92fd;
}
#form div {
  margin: 20px 0;
}
#form div span {
  float: right;
  line-height: 32px;
  padding: 2px;
}
</style>

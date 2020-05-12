<template>
  <div id="Programmer">
    <NavTopBlue></NavTopBlue>
    <ImgUpload></ImgUpload>
    <div class="content_box">
      <div class="prog_title">
        <span>平台兼职程序员</span>
        <span>共有 417987 位兼职程序员符合条件</span>
      </div>
      <dl class="sift">
        <dd>
          <dl class="role">
            <dt>角色</dt>
            <dd>产品经理</dd>
            <dd>设计师</dd>
            <dd>前端</dd>
            <dd>移动端</dd>
            <dd>小程序</dd>
            <dd>后端</dd>
          </dl>
        </dd>
        <dd>
          <dl class="city">
            <dt>全部</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>杭州</dd>
            <dd>广州</dd>
            <dd>成都</dd>
            <dd>武汉</dd>
          </dl>
        </dd>
        <dd>
          <ul class="industry">
            <dt>全部</dt>
            <dd>电子商务</dd>
            <dd>社交</dd>
            <dd>人工智能</dd>
            <dd>媒体门户</dd>
            <dd>工具软件</dd>
            <dd>消费生活</dd>
          </ul>
        </dd>
      </dl>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <foot></foot>
    <router-view></router-view>
  </div>
</template>

<script>
import NavTopBlue from "../../components/jyh/NavTopBlue";
import Banner from "../../components/jyh/Banner";
import ContactUs from "../../components/jyh/ContactUs";
import AutoRun from "../../components/jyh/AutoRun";
import ImgUpload from "../../components/jyh/ImgUpload";
import Foot from "../../components/mly/Foot";
export default {
  components: {
    NavTopBlue,
    Banner,
    ImgUpload,
    ContactUs,
    AutoRun,
    Foot
  }
};
</script>

<style scope>
#Programmer {
  background-color: #f7f7f7;
}
.content_box {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto;
}
.prog_title {
  background-color: #fff;
  height: 40px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}
.prog_title span {
  padding: 0 10px;
  font-size: 14px;
  color: #5995f3;
  line-height: 40px;
}
.sift dd dl * {
  display: flex;
}
.navtop {
  background-color: #fff;
  width: 100%;
  color: #333;
}
.navtop #form {
  color: #333;
}
.navtop a {
  color: #fff;
  text-decoration: none;
}
</style>

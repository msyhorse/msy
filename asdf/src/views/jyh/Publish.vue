<template>
  <div id="publish">
    <NavTopBlue></NavTopBlue>
    <div class="publish_content">
      <ol class="note">
        <li>请提供详细的项目资料，以便于我们为您推荐合适的开发者</li>
        <li>整包项目收费标准：报价含14%的平台服务费，如需开票另收税费9.36%</li>
        <li>项目发布之后，客栈工作人员将在半个工作日内联系您</li>
      </ol>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavTopBlue from "../../components/jyh/NavTopBlue";
import Foot from "../../components/mly/Foot";
export default {
  components: {
    NavTopBlue,
    Foot
  },
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
#publish {
  background: #f7f7f7;
}
.publish_content {
  width: 80%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
}
.publish .note li {
  list-style: 1;
}
</style>

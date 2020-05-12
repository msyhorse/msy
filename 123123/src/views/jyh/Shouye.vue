<template>
  <div id="index">
    <NavTop></NavTop>
    <Banner class="Banner"></Banner>
    <h2 class="title">开发服务方案</h2>
    <AutoRun class="AutoRun"></AutoRun>
    <h2 class="title">联系我们</h2>
    <ContactUs class="ContactUs"></ContactUs>
    <foot></foot>
    <router-view></router-view>
  </div>
</template>

<script>
import NavTop from "../../components/jyh/NavTop";
import Banner from "../../components/jyh/Banner";
import ContactUs from "../../components/jyh/ContactUs";
import AutoRun from "../../components/jyh/AutoRun";
import Foot from "../../components/mly/Foot";
export default {
  components: {
    NavTop,
    Banner,
    ContactUs,
    AutoRun,
    Foot
  }
};
</script>

<style scope>
.title {
  text-align: center;
  margin: 20px;
}
.ContactUs {
  width: 400px;
  margin: 30px auto;
}
</style>

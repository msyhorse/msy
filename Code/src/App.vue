<template>
  <div>
    <NavTop class="Navtop"></NavTop>
    <Banner class="Banner"></Banner>
    <autorun></autorun>
    <Index></Index>
    <AutoRun></AutoRun>
    <FormTest class="formtest"></FormTest>
  </div>
</template>

<script>
import NavTop from "./components/jyh/NavTop";
import Banner from "./components/jyh/Banner";
import Index from "./views/jyh/Index";
import FormTest from "./components/jyh/FormTest";
import AutoRun from "./components/jyh/AutoRun";
export default {
  components: {
    NavTop,
    Banner,
    Index,
    FormTest,
    AutoRun
  }
};
</script>

<style scope>
.Navtop {
  position: absolute;
  top: 0;
  z-index: 1;
  color: #fff;
}
.Navtop #form {
  color: #333;
}
.Navtop a {
  color: #fff;
  text-decoration: none;
}
.formtest {
  width: 470px;
  margin: 30px auto;
}

</style>

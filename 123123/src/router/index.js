import Vue from "vue";
import Router from "vue-router";
import Shouye from "../views/jyh/Shouye";
import CloudWork from "../views/jyh/CloudWork";
import Programmer from "../views/jyh/Programmer";
import Publish from "../views/jyh/Publish";
import Register from "../views/mly/Register";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Shouye",
      component: Shouye
      // redirect: "/shouye"//路由重定向
    },
    {
      path: "/Register",
      name: "Register",
      component: Register
    },
    {
      path: "/CloudWork",
      name: "CloudWork",
      component: CloudWork
    },
    {
      path: "/Programmer",
      name: "Programmer",
      component: Programmer
    },
    {
      path: "/Publish",
      name: "Publish",
      component: Publish
    }
  ]
});

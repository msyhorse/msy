import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A1 from "@/components/a1"
import A2 from "@/components/a2"
import A3 from "@/components/a3"
import D2 from '@/components/d2'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const A4={
  template:`<div><h2>{{$route.params.id}}</h2><router-view/></div>`
} 
const C1={
  template:`<div><h2>我是子C1</h2><router-view/></div>`
}
const C2={
  template:`<div><h2>我是子C2</h2><router-view/></div>`
}
const C3={
  template:`<div><h2>404</h2><router-view/></div>`
}
import D1 from "@/components/d1"

Vue.use(Router)

export default new Router({
  mode:"history",
  linkExactActiveClass:"b2",
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect:"/a2"
    },
    {
      path: '/a1/:id',
      name: 'A1',
      component: A1
    },
    {
      path: '/a2',
      name: 'A2',
      component: A2
    },
    {
      path: '/d2',
      name: 'D2',
      component: D2
    },
    {
      path: '/a3',
      name: 'A3',
      component: A3
    },
    {
      path: '/a4/:id',
      name: 'A4',
      component: A4,
      children:[{
        path:'c1',
        name:C1,
        component:C1
      },
      // {
      //   path:'/c2',
      //   name:C2,
      //   component:C2
      // }
    ]
    },
    {
      path:'*',
      
      // component:C3
      redirect:(to)=>{
        if(to.path==='/msy'){return "/a2"}
        else if(to.path==='/msy1'){return "/a3"}
        else {return "/"}
      }
    },
    {
      path:'/d1',
      name:D1,
      component:D1
    }
    // {
    //   path: '/c4',
    //   name: 'C4',
    //   component: C4
    // }
  ]
})

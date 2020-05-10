import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Zhuce from '@/components/zhuce'
import Shouye from '@/components/shouye'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect:"/shouye"
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    },
    {
      path: '/shouye',
      name: 'Shouye',
      component: Shouye
    }
  ]
})

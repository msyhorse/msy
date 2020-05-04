<template>
<div>
    <top :e1='msy' @f2="f3($event)"></top>
<h1>{{name}}</h1>
<h1>{{bbb}}</h1>
<div class="d1"></div>
 <!-- <top></top> -->
</div>
</template>
<script>
import top from "@/components/c4"
export default{
    data(){
        return {
            name:"ad现状？不存在的",
            bbb:"我是被a3传的值",
                
                    msy:[{name:"导航一"},
                    {name:"导航二"},
                    {name:"导航三"},
                    {name:"导航四"},
                    {name:"导航五"},
                    {name:"导航六"},]
                
            
        }
    },
  components:{
   top,
  },
  methods:{
    f3(el){
      console.log(111);
      this.name=el
    }
  },
  created(){
    // this.bbb=this.$route.query.info
    this.bbb=this.$route.params.info
  }
}
</script>
<style>
.d1{
    width:100%;
  height:500px;
  background:blue;
}
</style>
<template>
<div><div class="a2">
<div class="a1" v-for="(a,b) in name" :key='b' @click="msy1(a.name)">{{a.name}}</div></div>
<hr/>
<div  v-for="(a,b) in lalala" :key='b'>{{a.nick}}</div>
</div>
</template>
<script>

export default{
    data(){
        return {
        name:[],
        lalala:[]
    }},
  created(){
    //   alert(123123)
      
      this.$axios.get("/api/w/website/findGoodsTypeList",).then(res=>{
        //   console.log(this.name)
        this.name=res.data.data
          console.log(this.name)})
  },
  methods:{
      
      msy1(aaa){
           if (aaa != '' || aaa != null || aaa != undefined) {
           this.$axios.get("/api/w/website/findGoodsList",{
               params:{
                   platId:'d0a500ecf8ab41aa9ffe8e18ac6419e1',
                    info:aaa,
                    pageNo:1
               }
           }).then(res=>{
        this.lalala=res.data.data.tbk_dg_material_optional_response.result_list.map_data;
          console.log(this.lalala)})
          console.log(aaa)
           }

               
      }
  }
}
</script>
<style>
.a1{
    width:80px;
    height:50px;
    background:red;
    color:white;
    text-align: center;
    line-height:50px;
    margin:20px;
    float:left;
   
}
.a2{
     overflow: hidden;
}
</style>
<template>
<div>
<ul>
    <li v-for="(item,index) in e1" :key="index">{{item.name}}</li>
    <li @click="f1()">爱你，点我哦</li>
    <!-- <li>222</li>
    <li>333</li>
    <li>444</li>
    <li>555</li>
    <li>666</li>
    <li>777</li> -->
</ul>

</div>
</template>
<script>

export default{
    data(){
        return {
            name:"啦啦啦，德玛西亚",
            
        }
    },
    props:{e1:{
                type:Array,
                required:true
            }},
            methods:{
                f1(){
                    console.log(111);
                    this.$emit("f2","kn dio 哒")
                }
            }
}
</script>
<style>
ul{
    list-style: none;
    border: 2px black solid;
    overflow: hidden;
}
li{
    padding:20px;
    color:white;
    background:red;
    margin:10px;
    float:left;
}
</style>
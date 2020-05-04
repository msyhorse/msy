<template>
<div>
<h1>{{name}}</h1>
<input type="button" name="" id="" value="转到首页" @click="go()">
</div>
</template>
<script>

export default{
    data(){
        return {
            name:"啦啦啦，德玛西亚",
            aaa:"123123"
        }
    },
    methods:{
        go(){
            // location.href="http://localhost:8080/a2"
            // this.$router.push("/a2?info="+this.aaa)
            this.$router.push({name:"A2",params:{info:this.name}})
        }
    }
}
</script>
<style>
</style>
<template>
<div>
     
<h1>{{name}}</h1>

</div>
</template>
<script>

export default{
    data(){
        return {
            name:"请叫我中单杀神",
            canshu:''
        }
    },
    created(){
        // this.$router.params.id
        console.log(this.$route.params.id);
        this.canshu=this.$route.params.id
    }
}
</script>
<style>
</style>
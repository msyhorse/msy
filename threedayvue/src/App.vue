<template>
<div>
 
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <a href="/a1">a1</a>
    <a href="/a2">a2</a>
    <a href="/a3">a3</a> -->


     <router-link to="/" exact>首页</router-link>
    <router-link to="/a1" active-class="b1">a1</router-link>
    <router-link to="/a2">a2</router-link>
    <router-link to="/a3">a3</router-link>


    <!-- <router-link to="/a4">a4</router-link> -->
   <router-view/>
    
  </div></div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
.router-link-active{
  padding:20px;
  background:cyan;
  font-size:20px;
  color:white;
  text-decoration:none;
}

.b2{
  background:red;
  /* padding:20px; */
  font-size:20px;
  /* color:white; */
  text-decoration:none;
}
.b1{
  background:blueviolet;
  /* padding:20px; */
  font-size:20px;
  color:white;
  text-decoration:none;
}
</style>

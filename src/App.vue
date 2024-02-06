<template>
     
<div class="RuoterLinks">
    <h3> Vue Home</h3>

    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    @select="handleSelect">
 
  <router-link to="/"> <el-menu-item index="1" >Validation</el-menu-item></router-link>
  <router-link to="/Card"><el-menu-item index="3">Card</el-menu-item> </router-link>
  <router-link to="/pinia"><el-menu-item index="4">Todo</el-menu-item> </router-link>
  <router-link to="/UploadImage">  <el-menu-item index="2" >Image Upload</el-menu-item></router-link>
  <router-link to="/display"><el-menu-item index="5">view Image</el-menu-item> </router-link>


</el-menu>



</div>
<router-view></router-view>

</template>

<script >


</script>
<style>
.RuoterLinks{
    color: rgba(29, 85, 189, 0.822);
}

a.router-link.active{
    color: aqua;
}

</style>
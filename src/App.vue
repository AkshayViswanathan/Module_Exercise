<template>
<div class="RuoterLinks">
    <h3> Login page</h3>
    <router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
<router-link to="/contact">contact</router-link>
</div>
<RouterView/>
</template>

<script >
import {RouterView} from "vue-router";



</script>
<style>
.RuoterLinks{
    color: rgba(29, 85, 189, 0.822);
}

</style>
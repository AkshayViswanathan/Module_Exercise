<template>

    <Login2 @callfunc="callfunc" />
 </template>
 
 <script>

 import login2 from '../components/Login2.vue'

 function callfunc( data){
   alert(`Added ${data} `)
 }
  
 
 </script>
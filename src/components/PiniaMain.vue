<template>
    <header>
        <h3>Pinia </h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfMH_aW3x4SO_SqKHuCiQXgMzCKZulc3SjW-7tNlDjg&s" alt="">
  </header>
  <div class="taskButton"> 
  <button @click="filter = 'all'" class="allTask">all task</button>
  <button @click="filter = 'favs'" class="favTask">fav task</button>
  </div> 
<TaskForm/> 
       <div class="class-list" v-if="filter === 'all'"> 
        <p>You have {{ store1.totalCount }} task availble</p>
         <div v-for="task in store1.xyz" :key="task.id">
          <TaskDetails :task="task"/>
       </div>
   </div>

<div class="class-list" v-if="filter === 'favs'"> 
    <p>You have {{ store1.favCount }} task</p>
       <div v-for="task in store1.favs" :key="task.id">
          <TaskDetails :task="task"/>
       </div>


</div>


</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '../store/TaskStore'
import TaskDetails from './TaskDetails.vue'
import TaskForm from './TaskForm.vue'

const store1 = useStore()

const filter = ref('all' )


</script>



<style >
header{
color: rgb(84, 7, 97);
}
h1{
    display: flex;
    flex-wrap:wrap;
    
}


img{
    width: 100px;

}

.class-list{
    max-width: 640px;
    margin: 20px auto;
}
img{
    width: 40px;
}

header{
    background-color: rgb(255, 255, 255);
}
h3{
    display: flex;
    
}

.favTask{
    
    position: absolute;
  right: 90px;
  width: 100px;
 
  background-color: rgb(248, 198, 133);
  box-shadow: 2opx 40px 60px #0b0b0a;
  
  padding: 10px;
}
.allTask{
    position: absolute;
  right: 200px;
  width: 100px;
  
  background-color: rgb(248, 198, 133);
  box-shadow: 2opx 40px 60px #36e909;
  padding: 10px;
}


</style>
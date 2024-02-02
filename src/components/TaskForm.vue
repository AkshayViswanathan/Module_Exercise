<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Task to do..." v-model="newTask" />
        <button>Add </button>
   </form>

   
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '../store/TaskStore'

const newTask = ref("")

const taskStore = useStore()

const handleSubmit =()=>{
    if(newTask.value.length > 0){
        taskStore.addTask({
            title: newTask.value,
            isFav: false,
            id: Math.floor(Math.random() * 10000)
        })
        newTask.value = ""
    }

}

</script>


<style>
form{
    margin: auto;
  width: 50%;
  border: 3px solid rgb(255, 255, 255);
  padding: 10px;
  background-color: rgb(156, 231, 206);
  color: rgb(255, 255, 255);
}

form input{
    border: 2px solid rgb(86, 162, 82);
  border-radius: 4px;
  width: 500px;
  margin-right: 20px;   
}

form button{
    background-color: rgb(32, 140, 88);
    color: rgb(255, 255, 255);
    width: 60px;
}
</style>
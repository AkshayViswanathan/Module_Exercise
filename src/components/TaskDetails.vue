<template>
    <div class="task">
   <h3> {{ task.title }}</h3>
   <i class="material-icons" @click="store2.deteleTask(task.id)">delete</i>
   <i class="material-icons"  @click="store2.toggleFav(task.id)" :class={active:task.isFav}>favorite</i>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from '../store/TaskStore'

const props = defineProps( ['task'])

const store2 = useStore()

</script>






<style >

.task{
padding: 6px 20px;
background: white;
margin-top: 20px;
border-radius: 4px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 2px 4px 6px rgb(186, 181, 181);
}

.task h3, .task .icons{
    display: inline;
}

.task .icons{
   text-align: right;
}

.task i.active{
    color: red;
}

.task i{
    font-size: 1.4em;
    margin-left: 6px;
    cursor: pointer;
    color: grey;
}

</style>
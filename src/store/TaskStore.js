import { defineStore } from "pinia";

export const useStore = defineStore("TaskStore", {
    state:()=>({
        xyz: [
            {id: 1, title: "1st title value", isFav: true},
            {id: 2, title: "2nd title value" , isFav: false},
            {id: 3, title: "3rd title value" , isFav: false},
        ]
        
      })
    ,

    getters:{
        favs(){
            return this.xyz.filter(tru => tru.isFav)
        },

        favCount(){
            return this.xyz.reduce((present, current )=>{
                return current.isFav ? present + 1 : present }, 0 )}, 

 //in arrow function, this will not work in arrow function. so we can give argument state
         totalCount:(state)=>{
        return state.xyz.length }  },


        actions:{ //<action objcet with many fuction inside

           addTask(task){
            this.xyz.push(task)
             
           },
           deteleTask(id){
            this.xyz = this.xyz.filter(t=>t.id !== id )
              console.log(this.xyz); },

              
           toggleFav(id){
            const task = this.xyz.find(t => t.id === id)
            task.isFav = !task.isFav 
            console.log(task.isFav );
           }
        }
}


)
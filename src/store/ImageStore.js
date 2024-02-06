import { defineStore } from "pinia"

export const useDataStore = defineStore('dataStore',{
    state: () => ({
        uploadedImg:[],
    }),
    actions:{
        setImages(images){
            this.uploadedImg.push(images)
        },
        deleteImages(id){
            this.uploadedImg = this.uploadedImg.filter( t => t.id !== id)
            
        }
    }
})
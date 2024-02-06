import { createRouter, createWebHistory } from "vue-router";
import Validation from '../pages/Validation.vue'
import UploadImage from '../pages/UploadImage.vue'
import Card from '../pages/card.vue'
import Todo from '../pages/todo.vue'
import Display from '../pages/Display.vue'

const routes = [
    { 
      path:"/",
      name:"validation",
      component: Validation
    },
    {  
      path:"/UploadImage",
      name:"UploadImage",
      component: UploadImage

    },
    { 
      path:"/card",
      name:"card",
      component: Card
    },
    {
      path:"/pinia",
      name: "pinia",
      component: Todo
    },{
      path:"/display",
      name: "display",
      component: Display,
    },]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router
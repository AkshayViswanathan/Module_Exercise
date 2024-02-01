import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/homes.vue'
import About from '../pages/about.vue'
import Contact from '../pages/contact.vue'
import Todo from '../pages/todo.vue'

const routes = [
    { 
      path:"/",
      name:"home",
      component: Home
    },
    {  
      path:"/about",
      name:"about",
      component: About

    },
    { 
      path:"/contact",
      name:"contact",
      component: Contact
    },
    {
      path:"/pinia",
      name: "pinia",
      component: Todo
    },
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router
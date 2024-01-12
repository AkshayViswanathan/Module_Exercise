import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/homes.vue'
import About from '../pages/about.vue'
import Contact from '../pages/contact.vue'

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
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router
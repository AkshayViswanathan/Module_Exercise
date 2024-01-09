import './assets/main.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import registerPage from "./components/RegisterPage.vue"
import navbar from"./components/NavBar.vue"


const app= createApp(App)
app.use(ElementPlus)
app.component("registerComp", registerPage)
app.component("NavBarcomp", navbar)
app.mount('#app')


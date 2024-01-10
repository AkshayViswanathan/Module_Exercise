import './assets/main.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import registerPage from "./components/RegisterPage.vue"
import navbar from"./components/NavBar.vue"
import demo from './components/demo.vue'

const app= createApp(App)
app.use(ElementPlus)
app.component("NavBarcomp", navbar)
app.component("demo", demo )
app.component("registerComp", registerPage)

app.mount('#app')


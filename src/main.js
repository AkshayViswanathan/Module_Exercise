import './assets/main.css'
import { createApp } from 'vue' 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
  })

// import demo from './components/demo.vue'

const app= createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(vuetify)

app.mount('#app')


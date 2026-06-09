import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Get saved theme from localStorage or default to 'dark'
const savedTheme = localStorage.getItem('appTheme') || 'dark'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: savedTheme,
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')

import {
	createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import {
	vant
} from '@/config/vant.config.js'
import store from './store'
import md5 from "js-md5"
const app = createApp(App);
app.config.globalProperties.$md5 = md5
app.config.globalProperties.$store = store
vant(app)
app.use(router);
app.mount('#app')

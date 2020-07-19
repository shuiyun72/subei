import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'
// import './static/icon/iconfont.css';
const app = new Vue({
	...App,
	store
})
app.$mount()

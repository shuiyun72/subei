import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		hasLogin: false,
		token: "",
		tabBar:0,
		selAdres:{},
		psType:200,
		isVip:false,
		order:100
	},
	mutations: {
		setToken(state,el){
			state.token = el;
		},
		setTabBar(state,el){
			state.tabBar = el;
		},
		setAdres(state,el){
			state.selAdres = el;
		},
		setPsType(state,el){
			state.psType = el;
		},
		setVip(state,el){
			state.isVip = el;
		},
		setToken(state,el){
			state.token = el;
		},
		setOrder(state,el){
			state.order = el;
		},
	},
	actions: {
		
	}
})

export default store

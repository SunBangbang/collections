import {
	createStore
} from 'vuex'

const store =  createStore({
	state: {
	},
	getters: {},
	mutations: {
		changeLogin(state, user) {
			state.Authorization = user.Authorization;
			localStorage.setItem('Authorization', user.Authorization);
		}
	},
	actions: {},
	modules: {}
})
export default store;
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store( 
{
	state:{
		token:''
	},
	mutations: {

	},
	actions: {
		LoginByUsername( {commit}, userInfo){
			const username = userInfo.username.trim()
			const password = userInfo.password.trim()
			return new Promise(function(resolve,reject) {
				this.$http.post('/auto',{username,password});
			})
		}
	}

})
export default store
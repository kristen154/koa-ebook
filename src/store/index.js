import Vue from 'vue'
import Vuex from 'vuex'
 import { loginByUsername } from '@/api/login'

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
				loginByUsername(username,password);
			})
		}
	}

})
export default store
import Vue from 'vue'
import Vuex from 'vuex'
import { loginByUsername } from '@/api/login'
import{setToken,getToken} from '@/utils/auth'
Vue.use(Vuex)
const store = new Vuex.Store( 
{
	state:{
		token:''
	},
	mutations: {
		SET_TOKEN(state ,token){
			state.token = token
		}
	},
	actions: {
		LoginByUsername( { commit }, userInfo){
			const username = userInfo.username.trim()
			const password = userInfo.password.trim()
			return new Promise(function(resolve,reject) {
				loginByUsername(username,password).then(response=>{
					
					const data = response.data
					if(data.success){
						commit('SET_TOKEN',data.token)
						setToken(response.data.token)
						resolve()
					}
				}).catch(error=>{
					reject(error)
				})
			})
		}
	}

})
export default store
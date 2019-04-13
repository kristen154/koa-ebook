import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import {getToken} from '@/utils/auth.js'
const service = axios.create({
	baseURL: 'http://localhost:8080',
	timeout: 5000
})

service.interceptors.request.use(
	config => {
		if(store.state.token){
			config.headers['X-Token'] = getToken()
		}
		return config
	},
	error => {
		console.log(error)
		Promise.reject(error)
	}
)

service.interceptors.response.use(
	response =>response,
	error => {
		console.log('err' + error)
		Message({
			message: error.message,
			type: 'error',
			duration: 50000
		})
		return Promise.reject(error)
	}
)

export default service
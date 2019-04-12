import request from '@/utils/request.js'


 export function loginByUsername(username,password){
 	const data={
 		username,
 		password
 	}
 	return request({
 		url:'/auth',
 		method: 'post',
 		data
 	})
 }

 export function logout(){
 	return request({
 		url: '/login/logout',
 		method:'post'
 	})
 }

 export function getUserInfo(token){
 	return request({
 		url:'user/info',
 		method:'get',
 		params:{token}
 	})
 }
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import Login from '@/views/login/index'
import {tokenString} from '@/const.js'
import { getToken, removeToken, setToken } from '@/utils/auth.js'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:'/success',
    	name: 'Success',
    	component: Layout
    }
  ]
})
import jwt from 'jsonwebtoken'
router.beforeEach((to,from,next)=>{
	let token = getToken()
	const decoded = token && jwt.verify(token,tokenString)
	console.log(decoded)
	if(decoded){
		if(decoded.originExp - Date.now() < 0 ){
			removeToken()
			token = ''//防止token失效后再次进入到界面
		}else{
			decoded.originExp = Date.now() + 1;
			token = jwt.sign(decoded, tokenString);
			setToken(token)
		}
	}
	if(to.path=='/'){
		if(token){
			next('/success')
		}
		next()

	}else{
		if(token){
			Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定 header 的 token 验证
      		next()
		}else{
			next('/')
		}
	}
})

router.afterEach((to,from,next)=>{

})
export default router
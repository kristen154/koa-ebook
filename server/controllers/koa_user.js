const userModel = require('../models/koa_user.js');
const jwt = require('koa-jwt')
const bcrypt = require('bcryptjs')

const postUserAuth  = async function(){
	const data = this.request.body;
	console.log(data)
	const userInfo = await userModel.getUserByName(data.username,data.password)
	if(userInfo!=null){
		if(userInfo.password != data.password){
			this.body = {
				success:false,
				info: '密码错误！'
			}
		}else{
			const userToken = {
				id: userInfo.id,
				name: userInfo.user_name,
				originExp: Date.now() + 60 * 60 * 1000,

			}
			const secret = 'vue-koa-ebook';
			const token = jwt.sign(userToken,secret);
			this.body = {
				success: true,
				token: token
			}

		}
	}else{
		this.body = {
			success: false,
			info: '用户不存在'
		}
	}
}

module.exports = {
	postUserAuth
}
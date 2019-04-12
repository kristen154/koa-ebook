<template>
	<div class="login-container">
		<el-form ref="loginForm" :model="loginForm" 
		:rules="loginRules" class="login-form" auto-complete="on" label-position="left">
			<div class="title-container">
				<h3 class="title">用户登录</h3>
			</div>
			<el-form-item prop="username">
				<el-input v-model="loginForm.username"
				:placeholder="loginForm.username" 
				name="username" 
				type="text"
				auto-complete="no" />
			</el-form-item>

			<el-form-item prop="password">
				<el-input v-model="loginForm.password"
				:placeholder="loginForm.password"
				name="password"
				auto-complete="on" />
			</el-form-item>
			<el-button type="primary" 
			style="width:100%;margin-bottom:30px;"
			@click.native.prevent="handleLogin"> 
				登录
			</el-button>
		</el-form>
	</div>
</template>
<script>
export default {
	name:'login',
	data(){
		const validatePassword = (rule, value, callback) => {
			if(value.length<6){
				callback(new Error('the password cannot be less then 6 digits'))
			}else{
				callback()
			}
		}
		const validateUsername = (rule, value, callback) => {
			callback()
		}
		return {
			loginForm:{
				username:'kitt'
			},
			loginRules: {
				username: [{ required: true, trigger: 'blur', validator: validateUsername}],
				password:[{ required: true, trigger: 'blur', validator: validatePassword}]
			}
		}
	},
	methods: {
		handleLogin(){
			this.$refs.loginForm.validate(valid => {
				if(valid){
					this.$store.dispatch('LoginByUsername',this.loginForm).then(()=>{
						this.$router.push({path:'/success'})
					})
				}else{
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>
<style>
	.login-container{
		position:fixed;
		height:100%;
		width:100%;
		background-color:#2d3a4b
	}
	.title-container{
		position:relative
	}
	.title-container .title{
		font-size: 26px;
		color: #eee;
		margin:0 auto 40px aut0;
		text-align: center;
		font-weight: bold;

	}

	.svg-container{
		padding:6px 5px 6px 15px;
		color: #889aa4;
		vertical-align: middle;
		width:30px;
		display:inline-block;
	}
	.login-form{
		position: absolute;
		left: 0;
		right: 0;
		width: 520px;
		max-width: 100%;
		padding: 35px 35px 15px 35px;
   	 	margin: 120px auto;
	}
	.el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
</style>

<style scoped>
	
</style>
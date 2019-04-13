<template>
<div>
	{{name}}
</div>
</template>
<script>
import {getToken} from '@/utils/auth.js'
import jwt from 'jsonwebtoken'
export default {
	computed:{
		name:function(){
			const token = getToken();
			console.log('name')
			if(token != null && token != 'null'){
				const decode = jwt.verify(token, 'vue-koa-ebook');
				return decode.name
			}else{
				return null
			}
		}
	}
}
</script>
<template>
	<div>
		<el-container>
			<el-aside width="180px">
				<side-bar />
			</el-aside>
			<el-container>
				<el-header>
						<header-bar />
				</el-header>
				<el-main>
					<main-panel />
				</el-main>
			</el-container>

		</el-container>		
	</div>
</template>
<script>
import HeaderBar from './components/header'
import MainPanel from './components/mainpanel'
import SideBar from './components/sidebar'
	export default {
		components:{
			SideBar,
			HeaderBar,
			MainPanel,
		}
	}
</script>
<style scoped>
.el-main{ 
	background:#f3f4f5;
	position:absolute;
	top:60px;
	bottom:0;
	left:180px;
	right:0;
}
.box{
	width:100px;
	height:100px;
	background:red;
}
</style>
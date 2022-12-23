<template>
	<div class="agreement-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="content" v-html="content"></div>
	</div>
</template>

<script>
	import {
		GetAbout
	} from '@/http/api/index.ts'
	import {turnhtml} from '@/common/public.js'
	export default {
		name: 'onAgreement',
		data() {
			return {
				title:'用户服务协议',
				content:''
			}
		},
		mounted() {
			this.title = this.$route.query.type
			this.postinfo(this.title)
		},
		methods:{
			postinfo(title){
				console.log(title)
				GetAbout().then(res => {
					console.log(res)
					if(title == "用户服务协议"){
						this.content = turnhtml(res.data.user)
					}else{
						this.content = turnhtml(res.data.privacy)
					}
				})
			},
			onClickLeft() {
				this.$router.push('/login')
			}
		}
	}
</script>
<style>
	#app .agreement-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .agreement-page .van-nav-bar__title {
		color: #fff;
	}

	#app .agreement-page .van-nav-bar .van-icon {
		color: #fff;
	}
</style>
<style scoped lang="less">
	.agreement-page{
		width: 100%;
		min-height: 100vh;
		background: url(/src/assets/login/bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100vh;
		background-color: #000000;
		.content{
			padding: 0 20px;
			color: #e2e2e2;
		}
	}
</style>

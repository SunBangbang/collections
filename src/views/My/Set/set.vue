<template>
	<div class="set-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="set-list">
			<div class="list" @click="gonav('/changeinfo')">
				<div class="text">
					修改个人信息
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="18" />
				</div>
			</div>
		</div>
		<div class="set-list">
			<div class="list" @click="gonav('/changepassword')">
				<div class="text">
					修改登录密码
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="18" />
				</div>
			</div>
		</div>
		<div class="set-list">
			<div class="list" @click="gonav('/changepay')">
				<div class="text">
					修改支付密码
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="18" />
				</div>
			</div>
		</div>
		<div class="set-list">
			<div class="list" @click="gonav('/changetel')">
				<div class="text">
					修改手机号码
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="18" />
				</div>
			</div>
		</div>
		<div class="btn">
			<van-button type="primary"  @click="gonav('/login')" size="large" :round="true">退出登录</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onSet',
		data() {
			return {
				title: '设置'
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push('/my')
			},
			gonav(name, type) {
				this.$router.push({
					path: name,
					query: {
						type
					}
				})
			}
		}
	}
</script>
<style>
	#app .set-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .set-page .van-nav-bar__title {
		color: #fff;
	}

	#app .set-page .van-nav-bar .van-icon {
		color: #fff;
	}
	#app .set-page .van-button{
		height: 40px;
		border-radius: 8px;
	}
</style>
<style scoped lang="less">
	.set-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;
		.set-list {
			margin: 10px 20px;
		
			.list {
				height: 48px;
				background: rgba(75, 88, 127, 0.2);
				border-radius: 6px;
				color: #fff;
				padding: 14px 20px;
				display: flex;
				justify-content: space-between;
		
				.text {
					font-size: 14px;
				}
	
			}
		}
		.btn{
			width: 100%;
			padding: 0 20px;
			margin-top: 50px;
		}
	}
</style>

<template>
	<div class="realname-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="real">
			<van-cell-group inset class="groupstl">
				<van-field v-model="name" type="tel" maxlength="8" placeholder="请输入真实姓名" />
			</van-cell-group>
			<van-cell-group inset class="grouppass">
				<van-field v-model="card" type="password" placeholder="请输入您的身份证号码" maxlength="18" />
			</van-cell-group>
		</div>
		<div class="btn">
			<van-button type="primary" size="large" @click="gologin" :round="true">提交</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onRealName',
		data() {
			return {
				title:'实名认证',
				name:'',
				card:''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push('/my')
			}
		}
	}
</script>
<style>
	#app .realname-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .realname-page .van-nav-bar__title {
		color: #fff;
	}

	#app .realname-page .van-nav-bar .van-icon {
		color: #fff;
	}
	#app .realname-page .van-button{
		height: 40px;
		border-radius: 8px;
	}
	:root {
		--van-cell-group-inset-padding: 0;
		--van-cell-background-color: rgba(75, 88, 127, 0.2);
		--van-background-color-light: rgba(75, 88, 127, 0.2);
		--van-field-input-text-color: #9090A0;
		--van-button-primary-background-color: linear-gradient(90deg, #07BDF0, #0D65FC);
	}
	
	input.van-field__control::-webkit-input-placeholder {
		color: #9090A0;
	
	}
</style>
<style scoped lang="less">
	.realname-page{
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;
		.real{
			padding: 0 20px;
			.groupstl {
				margin-top: 20px;
			}
			
			.grouppass {
				margin-top: 15px;
			}
		}
		.btn{
			width: 100%;
			padding: 0 20px;
			margin-top: 50px;
		}
	}
</style>
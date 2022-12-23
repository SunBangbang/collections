<template>
	<div class="changeinfo-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="info">
			<div class="upload">
				<van-uploader v-model="fileList" multiple :after-read="afterRead" />
			</div>
			<van-cell-group inset class="groupstl">
				<van-field v-model="name" type="tel" maxlength="8" placeholder="请输入昵称" />
			</van-cell-group>
		</div>
		<div class="btn">
			<van-button type="primary" size="large" :round="true">提交</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onChangeInfo',
		data() {
			return {
				title: '修改个人信息',
				name: '',
				fileList:[]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push('/set')
			},
		}
	}
</script>
<style>
	#app .changeinfo-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .changeinfo-page .van-nav-bar__title {
		color: #fff;
	}

	#app .changeinfo-page .van-nav-bar .van-icon {
		color: #fff;
	}

	#app .changeinfo-page .van-uploader__upload {
		border-radius: 100%;
	}
	#app .changeinfo-page .van-button {
		height: 40px;
		border-radius: 5px;
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
	.changeinfo-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.info {
			padding: 0 20px;
			margin-top: 20px;

			.groupstl {
				margin-top: 20px;
			}

			.grouppass {
				margin-top: 15px;
			}

			.upload {
				padding: 15px;
				text-align: center;
			}
		}
		.btn {
			width: 100%;
			padding: 0 20px;
			margin-top: 50px;
		}

	}
</style>

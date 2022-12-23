<template>
	<div class="feedback-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="info">
			<van-cell-group inset>
				<van-field v-model="message" rows="3" autosize label="留言" type="textarea" maxlength="50"
					placeholder="请输入留言" show-word-limit />
			</van-cell-group>
		</div>
		<div class="upload">
			<div class="title">问题图片</div>
			<van-uploader v-model="fileList" multiple :after-read="afterRead" />
		</div>
		<div class="info">
			<van-cell-group inset>
				<van-field v-model="name" label="联系人" placeholder="请输入姓名" />
			</van-cell-group>
			<van-cell-group class="grouppass" inset>
				<van-field v-model="tel" label="联系电话" placeholder="请输入手机号" />
			</van-cell-group>
		</div>
		<div class="btn">
			<van-button type="primary" size="large" :round="true">提交</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onFeedback',
		data() {
			return {
				title: '意见反馈',
				message: '',
				fileList: [],
				name:'',
				tel:''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push('/my')
			},
			afterRead(file) {
				file.status = 'uploading';
				file.message = '上传中...';

				setTimeout(() => {
					file.status = 'failed';
					file.message = '上传失败';
				}, 1000);
			}
		}
	}
</script>
<style>
	#app .feedback-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .feedback-page .van-nav-bar__title {
		color: #fff;
	}

	#app .feedback-page .van-nav-bar .van-icon {
		color: #fff;
	}

	:root {
		--van-cell-group-inset-padding: 0;
		--van-cell-background-color: rgba(75, 88, 127, 0.2);
		--van-background-color-light: rgba(75, 88, 127, 0.2);
		--van-button-primary-background-color: linear-gradient(90deg, #07BDF0, #0D65FC);
	}

	input.van-field__control::-webkit-input-placeholder {
		color: #9090A0;

	}

	#app .feedback-page .van-uploader__upload {
		background-color: rgba(75, 88, 127, 0.2);
	}

	#app .feedback-page .van-button {
		height: 40px;
	}

	#app .feedback-page .van-field__label {
		color: #9090A0;
	}
</style>
<style scoped lang="less">
	.feedback-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.info {
			padding: 15px;

			.grouppass {
				margin-top: 15px;
			}
		}

		.upload {
			padding: 15px;
			display: flex;

			.title {
				font-size: 14px;
				color: #9090A0;
				margin-right: 10px;
			}
		}

		.btn {
			width: 100%;
			padding: 0 20px;
			margin-top: 50px;
		}
	}
</style>

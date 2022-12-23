<template>
	<div class="share-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="qr"></div>
		<div class="text">扫描二维码下载app</div>
		<div class="btn">
			<van-button type="primary" size="large" :round="true">保存图片</van-button>
			<van-button type="primary" size="large" :round="true">复制链接</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onShare',
		data() {
			return {
				title: '分享'
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
	#app .share-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .share-page .van-nav-bar__title {
		color: #fff;
	}

	#app .share-page .van-nav-bar .van-icon {
		color: #fff;
	}

	#app .share-page .van-button {
		width: 150px;
		height: 40px;
		border-radius: 10px;
	}
</style>
<style scoped lang="less">
	.share-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/share/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.qr {
			width: 140px;
			height: 140px;
			border-radius: 10px;
			margin: 0 auto;
			margin-top: 350px;
			background-color: #fff;
		}
		.text{
			text-align: center;
			color: #fff;
			margin: 20px 0;
			font-size: 14px;
		}
		.btn {
			margin-top: 30px;
			padding: 0 20px;
			display: flex;
			justify-content: space-between;
		}
	}
</style>

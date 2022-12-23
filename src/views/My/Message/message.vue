<template>
	<div class="message-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="message">
			<img src="@/assets/collction/null.png" alt="">
			<div>
				<span>暂无消息</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onMessage',
		data() {
			return {
				title: '消息'
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
	#app .message-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .message-page .van-nav-bar__title {
		color: #fff;
	}

	#app .message-page .van-nav-bar .van-icon {
		color: #fff;
	}
</style>
<style scoped lang="less">
	.message-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.message {
			text-align: center;
			padding-top: 100px;

			span {
				color: #fff;
				font-size: 14px;
			}

			img {
				width: 200px;
			}
		}
	}
</style>

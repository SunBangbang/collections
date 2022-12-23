<template>
	<div class="record-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="goods-list">
			<img src="@/assets/collction/null.png" alt="">
			<div>
				<span>暂无记录</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onRecord',
		data() {
			return {
				title: '转赠记录',
				type: 0
			}
		},
		mounted() {
			this.type = this.$route.query.type
			if (this.type == 1) {
				this.title = '转售记录'
			}
			if (this.type == 2) {
				this.title = '充值记录'
			}
			if (this.type == 3) {
				this.title = '提现记录'
			}

		},
		methods: {
			onClickLeft() {
				if (this.type == 0 || this.type == 1) {
					this.$router.push('/my')
				} else {
					this.$router.push('/wallet')
				}

			}
		}
	}
</script>
<style>
	#app .record-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .record-page .van-nav-bar__title {
		color: #fff;
	}

	#app .record-page .van-nav-bar .van-icon {
		color: #fff;
	}
</style>
<style scoped lang="less">
	.record-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.goods-list {
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

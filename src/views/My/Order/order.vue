<template>
	<div class="order-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="tabs">
			<van-tabs v-model:active="activeTabs" line-height="0" background="rgba(0,0,0,0.0)"
				title-active-color="#F3E1BD" title-inactive-color="#9090A0">
				<van-tab title="全部"></van-tab>
				<van-tab title="待付款"></van-tab>
				<van-tab title="已付款"></van-tab>
				<van-tab title="已取消"></van-tab>
			</van-tabs>
		</div>
		<div class="goods-list">
			<img src="@/assets/collction/null.png" alt="">
			<div>
				<span>暂无订单</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onOrder',
		data() {
			return {
				activeTabs: 0,
				type: 0,
				title:'我的订单'
			}
		},
		mounted() {
			this.type = this.$route.query.type
			if(this.type == 1){
				this.title = '盲盒订单'
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
	#app .order-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .order-page .van-nav-bar__title {
		color: #fff;
	}

	#app .order-page .van-nav-bar .van-icon {
		color: #fff;
	}
</style>
<style scoped lang="less">
	.order-page {
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

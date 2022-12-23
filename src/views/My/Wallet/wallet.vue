<template>
	<div class="wallet-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="box">
			<div class="balance-tit">我的余额</div>
			<div class="balance">
				<div class="balance-num">￥</div>
				<div>13801.23</div>
			</div>
			<div class="click">
				<div class="recharge">
					<div>
						<img src="@/assets/wallet/recharge.png" alt="">
					</div>
					<div>点击充值</div>
				</div>
				<div class="line"></div>
				<div class="recharge">
					<div>
						<img src="@/assets/wallet/withdrawal.png" alt="">
					</div>
					<div>点击提现</div>
				</div>
			</div>
		</div>
		<div class="record">
			<div class="recharge-record bor-b" @click="gonav('/record','2')">
				充值记录
				<van-icon name="arrow" color="#ffffff" size="18" />
			</div>
			<div class="recharge-record" @click="gonav('/record','3')">
				提现记录
				<van-icon name="arrow" color="#ffffff" size="18" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onWallet',
		data() {
			return {
				title: '钱包'
			}
		},
		mounted() {

		},
		methods: {
			gonav(name, type) {
				this.$router.push({
					path: name,
					query: {
						type
					}
				})
			},
			onClickLeft() {
				this.$router.push('/my')
			},
		}
	}
</script>
<style>
	#app .wallet-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .wallet-page .van-nav-bar__title {
		color: #fff;
	}

	#app .wallet-page .van-nav-bar .van-icon {
		color: #fff;
	}
</style>
<style scoped lang="less">
	.wallet-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.box {
			height: 150px;
			background: url(/src/assets/wallet/box-bg.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			padding: 20px;
			border-radius: 10px;
			margin: 0 15px;

			.balance-tit {
				color: #d3d3d3;
				font-size: 14px;
				padding: 0 0 20px 5px;
			}

			.balance {
				display: flex;
				font-size: 24px;
				font-weight: 700;
				color: #fff;

				.balance-num {
					padding-right: 8px;
				}
			}

			.click {
				width: 95%;
				margin-top: 20px;
				display: flex;
				justify-content: space-between;

				.recharge {
					display: flex;
					color: #d3d3d3;
					font-size: 16px;

					img {
						width: 23px;
						height: 23px;
						margin: 0 10px 0 15px;
					}

				}

				.line {
					width: 1px;
					height: 20px;
					background-color: #666666;
				}
			}
		}

		.record {
			background-color: #565c65;
			border-radius: 10px;
			padding: 5px 0;
			margin: 0 15px;
			margin-top: 20px;

			.recharge-record {
				color: #fff;
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				padding: 10px 20px;
				align-items: center;
			}

			.bor-b {
				border-bottom: 0.1px solid rgba(255, 255, 255, 0.1);
			}
		}
	}
</style>

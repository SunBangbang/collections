<template>
	<div class="details-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="bg">
			<img src="@/assets/home/img.jpeg" alt="">
		</div>
		<div class="name-box">
			<div class="name">
				<div class="name-cn">白虎</div>
				<div class="name-price">￥<span>998</span>.00</div>
			</div>
			<div class="content">
				<div class="items">
					<div class="items-tit">
						创作者：
					</div>
					<div class="items-cont">
						时光流苏
					</div>
				</div>
				<div class="items">
					<div class="items-tit">
						发售时间：
					</div>
					<div class="items-cont">
						2003.02.22
					</div>
				</div>
				<div class="items">
					<div class="items-tit">
						发售数量：
					</div>
					<div class="items-cont">
						999
					</div>
				</div>
				<div class="items">
					<div class="items-tit">
						发售状态：
					</div>
					<div class="items-cont">
						售卖中
					</div>
				</div>
				<div class="items">
					<div class="items-tit">
						剩余库存：
					</div>
					<div class="items-cont">
						888
					</div>
				</div>
			</div>
		</div>
		<div class="introduce">
			<div class="introduce-tit">
				<div class="line"></div>
				<div>藏品介绍</div>
			</div>
			<div class="introduce-cont">
				稀有白虎品种
			</div>
		</div>
		<div class="none"></div>
		<div class="purchase">
			<div class="purchase-price">
				￥<span>998</span>.00
			</div>
			<div class="btn">
				<van-button type="primary" size="large" :round="true" @click="gopay()">立即购买</van-button>
			</div>
		</div>
		<van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action
			@cancel="onCancel" />
	</div>
</template>

<script>
	export default {
		name: 'onDetails',
		data() {
			return {
				title: '藏品详情',
				show: false,
				actions: [{
						name: '余额支付'
					},
					{
						name: '微信支付'
					},
					{
						name: '支付宝支付'
					},
				]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push('/')
			},
			gopay() {
				this.show = true
			},
			onCancel() {
				this.show = false
			}
		}
	}
</script>
<style>
	#app .details-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .details-page .van-nav-bar__title {
		color: #fff;
	}

	#app .details-page .van-nav-bar .van-icon {
		color: #fff;
	}

	#app .details-page .van-button {
		width: 100px;
		height: 30px;
		font-size: 14px;
	}
</style>
<style scoped lang="less">
	.details-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.bg {
			width: 92%;
			height: 330px;
			border-radius: 10px;
			margin: 0 10px;
			text-align: center;
			margin: 0 auto;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.name-box {
			width: 92%;
			padding: 15px;
			margin: 0 auto;
			border-radius: 10px;
			margin-top: 10px;
			border: 1px solid rgba(255, 255, 255, 0.2);
			background-color: rgba(112, 112, 112, 0.2);

			.name {
				display: flex;
				justify-content: space-between;

				.name-cn {
					font-size: 18px;
					color: #ffffff;
					font-weight: 600;
				}

				.name-price {
					font-size: 16px;
					color: #04C5F0;
					font-weight: 700;

					span {
						font-size: 18px;
					}
				}
			}

			.content {
				margin-top: 20px;

				.items {
					display: flex;
					justify-content: space-between;
					margin-top: 7px;

					.items-tit {
						color: #e2e2e2;
						font-size: 14px;
					}

					.items-cont {
						color: #e2e2e2;
						margin-left: 10px;
						font-size: 14px;
					}
				}
			}
		}

		.introduce {
			width: 92%;
			padding: 10px;
			margin: 0 auto;
			margin-top: 20px;
			border: 1px solid rgba(255, 255, 255, 0.2);
			background-color: rgba(112, 112, 112, 0.2);
			border-radius: 10px;

			.introduce-tit {
				display: flex;
				align-items: center;
				font-size: 16px;
				font-weight: 700;
				color: #fff;
			}

			.line {
				width: 4px;
				height: 16px;
				background-color: #04C5F0;
				margin-right: 10px;
			}

			.introduce-cont {
				font-size: 15px;
				color: #c2c2c2;
				padding-top: 10px;
			}
		}

		.none {
			height: 60px;
		}

		.purchase {
			width: 100%;
			height: 60px;
			border-top: 1px solid rgba(255, 255, 255, 0.2);
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 10px 15px 10px 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.purchase-price {
				color: #04C5F0;
				font-size: 19px;
				font-weight: 700;

				span {
					font-size: 22px;
				}
			}
		}

	}
</style>

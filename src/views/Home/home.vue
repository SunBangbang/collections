<template>
	<div class="home-page">
		<div class="home-title">Mo 未来</div>
		<div class="home-swipe">
			<van-swipe :autoplay="3000" lazy-render>
				<van-swipe-item v-for="(item,index) in swipe" :key="index">
					<img :src="item.img" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="home-notice">
			<van-notice-bar mode="link" left-icon="@/assets/home/notice.png" :text="noticeText">
				<template #left-icon>
					<img class="img" src="@/assets/home/notice.png" alt="">
					<span>公告</span>
				</template>
			</van-notice-bar>
		</div>
		<div class="tabs">
			<van-tabs v-model:active="active" line-height="0" background="rgba(0,0,0,0.0)" title-active-color="#F3E1BD"
				title-inactive-color="#9090A0">
				<van-tab title="热门推荐"></van-tab>
				<van-tab title="发售日历"></van-tab>
				<van-tab title="盲盒专区"></van-tab>
			</van-tabs>
		</div>
		<div class="goods-list">
			<div class="goods-content" v-for="(item,index) in 5" :key="index" @click="gonav('/details')">
				<div class="goods-img">
					<img src="@/assets/home/img.jpeg" alt="">
					<div class="goods-sj">
						即将开售 11:20:52
					</div>
				</div>
				<div class="goods-con">
					<div class="goods-title">紫铜鎏金高浮雕双龙耳三鹤足香薰壶</div>
					<div class="goods-num">
						<div class="num-left">
							<div class="name">限量</div>
							<div class="number">10000份</div>
						</div>
						<div class="num-right">
							<div class="name num-text">剩余</div>
							<div class="number num-number">10000份</div>
						</div>
					</div>
					<div class="head-box">
						<div class="head-left">
							<div class="head"></div>
							<div class="text">创数科技</div>
						</div>
						<div class="Price">
							<span>￥</span>10.00
						</div>
					</div>
				</div>
			</div>
		</div>
		<onTabbar :active="active"></onTabbar>
	</div>
</template>

<script>
	import {
		GetSlider,
		NewArticle,
		GetHot
	} from '@/http/api/index.ts'
	import onTabbar from '@/components/tabbar.vue'
	export default {
		name: 'onHome',
		data() {
			return {
				active: 0,
				swipe: [],
				noticeText: ''
			}
		},
		mounted() {
			//获取轮播图
			this.postSwipe()
			//获取公告
			this.getNotice()
			//获取热门推荐
			this.getHot()
		},
		components: {
			onTabbar
		},
		methods: {
			getHot() {
				// let formData = new FormData()
				// formData.append('limit', 15)
				// formData.append('page', 1)
				let params = {
					limit:30,
					page:1
				}
				GetHot(params).then(res => {
					console.log(res)
					// if (res.data.code == 401) {
					// 	this.$notify(res.data.info);
					// 	this.$router.push('/login')
					// }

				})
			},
			getNotice() {
				NewArticle().then(res => {
					this.noticeText = res.data.data.name
				})
			},
			postSwipe() {
				GetSlider().then(res => {
					this.swipe = res.data
				})
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
	#app .home-page .van-notice-bar {
		background: rgba(75, 88, 127, 0.2);
		color: #fff;
		border-radius: 5px;
	}

	#app .home-page .van-tab {
		flex: 0.2;
		font-size: 13px;
	}

	#app .home-page .van-tab--active {
		font-size: 16px;
	}

	.my-swipe .home-page .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
</style>
<style scoped lang="less">
	.home-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.home-title {
			text-align: center;
			color: #F3E1BD;
			padding-top: 20px;
			font-weight: 500;
		}

		.home-swipe {
			padding: 20px;

			img {
				width: 99%;
				height: 150px;
				border-radius: 10px;
				border: 1px solid #F3E1BD;
			}
		}

		.home-notice {
			padding: 0 20px;

			.img {
				width: 19px;
				height: 17px;
				margin-right: 4px;
			}

			span {
				font-size: 14px;
				margin-right: 10px;
				font-weight: 900;
				color: #F3E1BD;
			}
		}

		.tabs {
			padding: 15px 10px 0 15px;
		}

		.goods-list {
			.goods-content {
				width: 90%;
				height: 480px;
				background-image: url(/src/assets/home/base.png);
				background-size: 100% 480px;
				background-repeat: no-repeat;
				margin: 0 auto;
				margin-top: 20px;

				.goods-img {
					position: relative;
					padding: 3px;

					img {
						width: 100%;
						height: 370px;
						border-top-left-radius: 10px;
						border-top-right-radius: 10px;
					}

					.goods-sj {
						position: absolute;
						left: 10px;
						top: 10px;
						padding: 4px 10px;
						background-color: #1E4DC6;
						color: #04C5F0;
						font-size: 14px;
						border-radius: 5px;
					}
				}

				.goods-con {
					padding: 7px 15px;
					font-family: PingFang;
					font-weight: bold;
					font-size: 16px;

					.goods-title {
						color: #fff;
					}
				}

				.goods-num {
					display: flex;
					justify-content: space-between;
					margin-top: 10px;

					.num-left {
						display: flex;
						justify-content: space-between;

					}

					.num-right {
						display: flex;
						justify-content: space-between;
					}

					.name {
						width: 40px;
						height: 20px;
						background: #F3E1BD;
						border-radius: 4px;
						font-size: 14px;
						text-align: center;
						line-height: 20px;
						color: #333333;
					}

					.number {
						width: 80px;
						height: 20px;
						background: rgba(255, 255, 255, 0.2);
						border-radius: 4px;
						margin-left: 10px;
						text-align: center;
						line-height: 22px;
						font-size: 14px;
						font-weight: 500;
						color: #F3E1BD;
					}

					.num-text {
						background-color: #04C5F0;
					}

					.num-number {
						color: #04C5F0;
					}
				}

				.head-box {
					display: flex;
					justify-content: space-between;
					margin-top: 8px;

					.head-left {
						display: flex;

						.head {
							width: 24px;
							height: 24px;
							background: #FFFFFF;
							border: 1px solid #9090A0;
							border-radius: 50%;
						}

						.text {
							font-size: 14px;
							font-family: PingFang SC;
							font-weight: 400;
							color: #9090A0;
							margin-left: 5px;
							padding-top: 2px;
						}
					}

					.Price {
						padding-top: 2px;
						font-size: 16px;
						font-family: PingFang SC;
						font-weight: 600;
						color: #04C5F0;

						span {
							font-size: 12px;
						}
					}
				}
			}
		}
	}
</style>

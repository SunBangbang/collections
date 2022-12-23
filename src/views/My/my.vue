<template>
	<div class="my-page">
		<div class="my-info"><img src="@/assets/my/info.png" @click="gonav('/message')" alt=""></div>
		<div class="my-user">
			<div class="user-head"></div>
			<div>
				<div class="username">mo未来</div>
				<div class="user-card">
					推荐码: 2455265478
					<img src="@/assets/my/copy.png" alt="">
				</div>
			</div>
		</div>
		<div class="address">
			区块链地址：0x2sef5sdfsdf1sf1sd5fswefsd2s
			<img src="@/assets/my/copy.png" alt="">
		</div>
		<div class="my-list">
			<div @click="gonav('/order','0')">
				<div class="icon"><img src="@/assets/my/list-icon1.png" alt=""></div>
				<div class="text">我的订单</div>
			</div>
			<div @click="gonav('/order','1')">
				<div class="icon"><img src="@/assets/my/list-icon2.png" alt=""></div>
				<div class="text">盲盒订单</div>
			</div>
			<div @click="gonav('/record','0')">
				<div class="icon"><img src="@/assets/my/list-icon3.png" alt=""></div>
				<div class="text">转赠记录</div>
			</div>
			<div @click="gonav('/record','1')">
				<div class="icon"><img src="@/assets/my/list-icon4.png" alt=""></div>
				<div class="text">转售记录</div>
			</div>
		</div>
		<div class="my-list2">
			<div class="list" @click="gonav('/wallet')">
				<div class="text">
					<img src="@/assets/my/icon1.png" alt="">
					我的钱包
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="20" />
				</div>
			</div>
			<!-- <div class="list">
				<div class="text">
					<img src="@/assets/my/icon2.png" alt="">
					权益卡包
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="20" />
				</div>
			</div> -->
			<div class="list" @click="gonav('/realname')">
				<div class="text">
					<img src="@/assets/my/icon3.png" alt="">
					实名认证
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="20" />
				</div>
			</div>
			<div class="list" @click="gonav('/share')">
				<div class="text">
					<img src="@/assets/my/icon4.png" alt="">
					我的推广
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="20" />
				</div>
			</div>
			<!-- <div class="list">
				<div class="text">
					<img src="@/assets/my/icon5.png" alt="">
					好友排名
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="20" />
				</div>
			</div> -->
			<div class="list" @click="gonav('/feedback')">
				<div class="text">
					<img src="@/assets/my/icon6.png" alt="">
					意见反馈
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="20" />
				</div>
			</div>
			<div class="list" @click="gonav('/aboutus')">
				<div class="text">
					<img src="@/assets/my/icon7.png" alt="">
					关于我们
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="20" />
				</div>
			</div>
			<div class="list" @click="gonav('/set')">
				<div class="text">
					<img src="@/assets/my/icon8.png" alt="">
					设置
				</div>
				<div class="icon">
					<van-icon name="arrow" color="#ffffff" size="20" />
				</div>
			</div>
		</div>
		<onTabbar :active="active"></onTabbar>
	</div>
</template>

<script>
	import {
		Center
	} from '@/http/api/index.ts'
	import onTabbar from '@/components/tabbar.vue'
	export default {
		name: 'onMy',
		data() {
			return {
				active: 3
			}
		},
		components: {
			onTabbar
		},
		mounted() {
			this.userinfo()
		},
		methods: {
			userinfo() {
				Center().then(res => {
					console.log(res)
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

<style lang="less" scoped>
	.my-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.my-info {
			padding: 20px;
			text-align: right;

			img {
				width: 20px;
				height: 20px;
			}
		}

		.my-user {
			padding: 0 20px;
			display: flex;

			.user-head {
				width: 65px;
				height: 65px;
				background-color: #fff;
				border-radius: 100%;
				border: 2px solid #F3E1BD;
				margin-right: 15px;
			}

			.username {
				margin-top: 5px;
				font-size: 20px;
				font-weight: 600;
				color: #FFFFFF;
			}

			.user-card {
				font-size: 14px;
				font-weight: 400;
				color: #9090A0;
				margin-top: 6px;
				display: flex;
				align-items: center;

				img {
					width: 14px;
					height: 14px;
					margin-left: 10px;
				}
			}

		}

		.address {
			margin: 20px;
			color: #fff;
			height: 44px;
			line-height: 44px;
			text-align: center;
			font-size: 14px;
			font-weight: 500;
			color: #FFFFFF;
			background: rgba(75, 88, 127, 0.2);

			img {
				width: 14px;
				height: 14px;
				margin-left: 10px;
			}
		}

		.my-list {
			margin: 20px;
			height: 100px;
			background-image: url(/src/assets/my/bg.png);
			background-size: 100% 100px;
			background-repeat: no-repeat;
			display: flex;
			justify-content: space-between;
			text-align: center;
			padding: 25px 20px;

			.icon {
				img {
					width: 25px;
					height: 25px;
				}
			}

			.text {
				font-size: 14px;
				font-family: PingFang SC;
				font-weight: 400;
				color: #9090A0;
				margin-top: 5px;
			}
		}

		.my-list2 {
			margin: 20px;

			.list {
				height: 50px;
				background: rgba(75, 88, 127, 0.2);
				border-radius: 6px;
				color: #fff;
				padding: 12px 20px;
				display: flex;
				justify-content: space-between;
				margin-bottom: 10px;

				.text {
					display: flex;
					align-items: center;

					img {
						width: 20px;
						height: 20px;
						margin-right: 10px;
						padding-top: 2px;
					}
				}

				.icon {
					padding-top: 4px;
				}
			}
		}
	}
</style>

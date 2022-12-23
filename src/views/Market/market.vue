<template>
	<div class="market-page">
		<van-nav-bar title="市场" :border="false" />
		<van-search v-model="value" placeholder="请输入搜索关键词" />
		<div class="tabs">
			<van-tabs v-model:active="activeTabs" line-height="0" background="rgba(0,0,0,0.0)"
				title-active-color="#F3E1BD" title-inactive-color="#9090A0">
				<van-tab title="藏品"></van-tab>
				<van-tab title="宝盒"></van-tab>
			</van-tabs>
			<div id="tab">
				<div class="tab-tit">
					<!--点击设置curId的值  如果curId等于0，第一个a添加cur类名，如果curId等于1，第二个a添加cur类名，以此类推。添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
					<a href="javascript:;" @click="curId=0" :class="{'cur':curId===0}">最新</a>
					<a href="javascript:;" @click="curId=1" :class="{'cur':curId===1}">价格</a>
				</div>
			</div>
		</div>
		<div class="goods-list">
			<div class="goods-content" v-for="(item,index) in 5" :key="index">
				<div class="goods-img">
					<img src="@/assets/home/img.jpeg" alt="">
				</div>
				<div class="goods-con">
					<div class="goods-title">紫铜鎏金高浮雕双龙耳三鹤足香薰壶</div>
					<div class="goods-num">编号 #41/56</div>
				</div>
				<div class="Price">
					<span>￥</span>10.00
				</div>
			</div>
		</div>
		<onTabbar :active="active"></onTabbar>
	</div>
</template>

<script>
	import onTabbar from '@/components/tabbar.vue'
	export default {
		name: 'onMarket',
		data() {
			return {
				active: 2,
				activeTabs: 0,
				value: '',
				curId: 0,
			}
		},
		components: {
			onTabbar
		},
		methods: {

		}
	}
</script>
<style>
	#app .market-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .market-page .van-nav-bar__title {
		color: #fff;
	}

	#app .market-page .van-search {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .market-page .van-search__content {
		background: rgba(75, 88, 127, 0.2);
	}

	#app .market-page .van-field__control {
		color: #fff;
	}

	#app .market-page .van-tab {
		width: 60px;
		flex: none;
		font-size: 16px;
	}

	#app .market-page .van-tab--active {
		font-size: 18px;
	}
</style>
<style scoped lang="less">
	.market-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.tabs {
			margin: 0 20px;
			position: relative;

			#tab {
				position: absolute;
				top: 8px;
				right: 0;
				margin: 0 auto;

				.tab-tit {
					a {
						display: inline-block;
						font-size: 13px;
						text-align: center;
						color: #9090A0;
						background-color: rgba(255, 255, 255, 0.1);
						text-decoration: none;
						margin-right: 10px;
						padding: 5px 10px;
						border-radius: 5px;
					}

					.cur {
						color: #fff;
					}
				}
			}
		}

		.goods-list {
			width: 90%;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			flex-wrap: wrap;

			.goods-content {
				width: 49%;
				height: 260px;
				background-image: url(/src/assets/home/base.png);
				background-size: 100% 260px;
				background-repeat: no-repeat;
				margin-top: 10px;

				.goods-img {
					padding: 2px;

					img {
						width: 100%;
						height: 180px;
						border-top-left-radius: 10px;
						border-top-right-radius: 10px;
					}
				}

				.goods-con {
					padding: 0 10px;

					.goods-title {
						color: #fff;
						font-family: PingFang;
						font-size: 13px;
						overflow: hidden; //溢出隐藏
						white-space: nowrap; //禁止换行
						text-overflow: ellipsis; //...
					}
					.goods-num{
						width: 80px;
						text-align: center;
						min-width: 10px;
						font-size: 13px;
						color: #654F22;
						margin-top: 5px;
						background: linear-gradient(90deg, #B29A6A 0%, #F3E1BD 100%);
						border-radius: 4px;
					}
				}
				.Price {
					text-align: right;
					padding-top: 2px;
					padding-right: 10px;
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
</style>
